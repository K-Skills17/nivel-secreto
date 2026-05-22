import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/checkout", "/pedido/", "/api/", "/carrinho"] }],
    sitemap: "https://nivelsecreto.com.br/sitemap.xml",
  };
}
