import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: "MercadoPago not configured" },
        { status: 500 }
      );
    }

    const items = body.items.map((item: { id: string; title: string; quantity: number; unit_price: number }) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: item.unit_price,
      currency_id: "BRL",
    }));

    const preference = {
      items,
      payer: body.payer,
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/sucesso`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/falha`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nivelsecreto.com.br"}/pedido/pendente`,
      },
      auto_return: "approved",
      statement_descriptor: "NIVEL SECRETO",
      external_reference: `order-${Date.now()}`,
    };

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(preference),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "MercadoPago error" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      id: data.id,
      init_point: data.init_point,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
