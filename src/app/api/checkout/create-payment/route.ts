import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 199;
const FLAT_SHIPPING = 14.90;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const accessToken = process.env.MP_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json({ error: "Payment not configured" }, { status: 500 });
    }

    // Recompute prices server-side from catalog (never trust client prices)
    const orderItems = body.items.map((item: { id: string; quantity: number }) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`Product ${item.id} not found`);
      return {
        id: product.id,
        title: product.name,
        quantity: item.quantity,
        unit_price: product.priceBRL,
        currency_id: "BRL",
      };
    });

    const subtotal = orderItems.reduce((s: number, i: { unit_price: number; quantity: number }) => s + i.unit_price * i.quantity, 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;

    if (shipping > 0) {
      orderItems.push({ id: "shipping", title: "Frete", quantity: 1, unit_price: shipping, currency_id: "BRL" });
    }

    const preference = {
      items: orderItems,
      payer: {
        name: body.payer.name,
        email: body.payer.email,
        identification: { type: "CPF", number: body.payer.cpf.replace(/\D/g, "") },
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/sucesso`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/falha`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/pendente`,
      },
      auto_return: "approved",
      statement_descriptor: "NIVEL SECRETO",
      external_reference: `order-${Date.now()}`,
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify(preference),
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Payment error" }, { status: response.status });
    }

    return NextResponse.json({ id: data.id, init_point: data.init_point });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
