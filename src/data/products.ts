export type Product = {
  id: string;
  slug: string;
  name: string;
  shortBenefit: string;
  description: string;
  specs: { label: string; value: string }[];
  category: "casais" | "ela" | "ele" | "iniciantes" | "bem-estar";
  tags: string[];
  priceBRL: number;
  compareAtBRL?: number;
  images: { src: string; alt: string }[];
  inStock: boolean;
  beginnerFriendly: boolean;
  bundle?: { items: string[]; bundlePriceBRL: number };
  reviews?: { name: string; rating: number; text: string; date: string }[];
};

export const collections = [
  { name: "Para Casais", slug: "casais", description: "Produtos pensados para momentos a dois. Reconexão, cumplicidade e prazer compartilhado.", image: "https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/gwen-mamanoleas-ZwKAJ0zmk6Y-unsplash-scaled-r5rluv7n72gbjjzyiaveac261fcecy6svqnubggoqs.jpg" },
  { name: "Para Ela", slug: "ela", description: "Autoconhecimento e bem-estar feminino com produtos de alta qualidade.", image: "https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/ifonnx-toys-Id_jzYP7h6s-unsplash-scaled-r5rmkehsv1eqy6wnec8j0w2z09hdgxkae4opo2lnpg.jpg" },
  { name: "Para Ele", slug: "ele", description: "Prazer masculino elevado com tecnologia e materiais premium.", image: "https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/lovense-toys-BttrI8hxmi8-unsplash-scaled-r5rmghi0dw1qkolg9nahmvntwgsbec0juqtvokepms.jpg" },
  { name: "Iniciantes", slug: "iniciantes", description: "O ponto de partida perfeito para quem quer explorar com conforto e segurança.", image: "https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/andrey-matveev-WydWcF2EPjc-unsplash-scaled-r5rls7c3tyt2nbv825fg8095g4gyjtm6ik4bd8eudg.jpg" },
  { name: "Bem-Estar", slug: "bem-estar", description: "Óleos, velas e acessórios para criar o ambiente perfeito.", image: "https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/pexels-31299941-8587249-r5rlpa26kisyj0454vx8gqtiwyvulq08s31xm8qxqc.jpg" },
];

export const products: Product[] = [
  {
    id: "1", slug: "vibrador-casal-controle-app", name: "Vibrador para Casais — Controle por App",
    shortBenefit: "Intimidade conectada, mesmo à distância",
    description: "Projetado para uso simultâneo durante a relação. Controle via aplicativo permite que seu parceiro(a) participe de qualquer lugar. Silicone médico, à prova d'água, recarregável via USB.",
    specs: [{ label: "Material", value: "Silicone médico" }, { label: "Conectividade", value: "Bluetooth / App" }, { label: "Bateria", value: "Recarregável USB, 2h+" }, { label: "Resistência", value: "À prova d'água (IPX7)" }],
    category: "casais", tags: ["best-seller", "casais"], priceBRL: 399.80, compareAtBRL: 450.00,
    images: [{ src: "https://nivelsecreto.com.br/wp-content/uploads/2025/05/18877-4-300x300.jpg", alt: "Vibrador para casais com controle por aplicativo" }],
    inStock: true, beginnerFriendly: false,
    reviews: [
      { name: "Carla M.", rating: 5, text: "Trouxe uma nova energia para nossa relação. Discreto e potente.", date: "2025-04" },
      { name: "Rafael S.", rating: 5, text: "Minha esposa adorou. A função de controle remoto é incrível.", date: "2025-03" },
    ],
  },
  {
    id: "2", slug: "massageador-wand-recarregavel", name: "Massageador Wand Premium",
    shortBenefit: "Relaxamento profundo e prazer intenso",
    description: "Massageador de alta potência com 10 padrões de vibração. Cabeça flexível que se adapta ao corpo. Silicone premium hipoalergênico, recarregável via USB.",
    specs: [{ label: "Material", value: "Silicone + ABS" }, { label: "Velocidades", value: "10 padrões" }, { label: "Comprimento", value: "36cm" }, { label: "Bateria", value: "Recarregável USB" }],
    category: "ela", tags: ["best-seller"], priceBRL: 109.90, compareAtBRL: 129.99,
    images: [{ src: "https://nivelsecreto.com.br/wp-content/uploads/2025/05/3018-4-300x300.jpg", alt: "Massageador wand premium recarregável" }],
    inStock: true, beginnerFriendly: true,
    reviews: [{ name: "Julia A.", rating: 5, text: "Potente e silencioso. Melhor investimento que fiz.", date: "2025-05" }],
  },
  {
    id: "3", slug: "estimulador-pressao-7-intensidades", name: "Estimulador de Ondas de Pressão",
    shortBenefit: "Sensações que você nunca experimentou",
    description: "Tecnologia de ondas de pressão com 7 níveis de intensidade. Estimulação sem contato direto para sensações únicas. Silicone ultra macio, à prova d'água.",
    specs: [{ label: "Material", value: "Silicone médico" }, { label: "Intensidades", value: "7 níveis" }, { label: "Bateria", value: "Recarregável USB, 1.5h" }, { label: "Resistência", value: "À prova d'água" }],
    category: "ela", tags: ["tendência"], priceBRL: 189.90, compareAtBRL: 239.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Estimulador de ondas de pressão" }],
    inStock: true, beginnerFriendly: true,
    reviews: [{ name: "Mariana L.", rating: 5, text: "Superou todas as minhas expectativas. Discreto e poderoso.", date: "2025-04" }],
  },
  {
    id: "4", slug: "masturbador-discreto-vibracao", name: "Masturbador Discreto com Vibração",
    shortBenefit: "Prazer masculino com total discrição",
    description: "Design compacto e discreto com motor multivelocidade. Material interno de toque realista. Fácil de limpar, recarregável.",
    specs: [{ label: "Material", value: "TPE premium" }, { label: "Motor", value: "Multivelocidade" }, { label: "Design", value: "Compacto e discreto" }],
    category: "ele", tags: [], priceBRL: 109.99, compareAtBRL: 149.50,
    images: [{ src: "https://nivelsecreto.com.br/wp-content/uploads/2025/05/17724-4-300x300.jpg", alt: "Masturbador discreto com vibração" }],
    inStock: true, beginnerFriendly: true,
  },
  {
    id: "5", slug: "anel-vibratorio-casais", name: "Anel Vibratório para Casais",
    shortBenefit: "Prazer compartilhado a cada momento",
    description: "Silicone elástico e confortável com 10 modos de vibração. Estimulação simultânea para ambos os parceiros. Recarregável via USB, silencioso.",
    specs: [{ label: "Material", value: "Silicone elástico" }, { label: "Modos", value: "10 vibrações" }, { label: "Bateria", value: "Recarregável USB" }],
    category: "casais", tags: ["iniciante", "casais"], priceBRL: 79.90, compareAtBRL: 99.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Anel vibratório para casais" }],
    inStock: true, beginnerFriendly: true,
  },
  {
    id: "6", slug: "oleo-massagem-sensorial", name: "Óleo de Massagem Sensorial",
    shortBenefit: "Crie o momento perfeito com toque e aroma",
    description: "Óleo com efeito aquecedor gradual. Fragrância sutil de baunilha e sândalo. Textura sedosa, não mancha tecidos. Ingredientes naturais.",
    specs: [{ label: "Volume", value: "120ml" }, { label: "Efeito", value: "Aquecedor gradual" }, { label: "Fragrância", value: "Baunilha e sândalo" }],
    category: "bem-estar", tags: ["iniciante"], priceBRL: 39.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Óleo de massagem sensorial" }],
    inStock: true, beginnerFriendly: true,
  },
  {
    id: "7", slug: "vela-massagem-aromatica", name: "Vela de Massagem Aromática",
    shortBenefit: "Luz, aroma e toque em uma só experiência",
    description: "Vela de cera vegetal que derrete em óleo de massagem morno. Fragrância de rosa e ylang-ylang. Queima limpa, ingredientes naturais.",
    specs: [{ label: "Peso", value: "180g" }, { label: "Duração", value: "~40h" }, { label: "Fragrância", value: "Rosa e ylang-ylang" }],
    category: "bem-estar", tags: ["iniciante"], priceBRL: 59.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Vela de massagem aromática" }],
    inStock: true, beginnerFriendly: true,
  },
  {
    id: "8", slug: "vibrador-duplo-motor", name: "Vibrador Duplo Motor",
    shortBenefit: "Estimulação interna e externa simultânea",
    description: "Motor duplo para estimulação simultânea. Material flexível body-safe, design ergonômico pensado para a anatomia feminina. 15cm.",
    specs: [{ label: "Material", value: "Silicone body-safe" }, { label: "Motores", value: "2 independentes" }, { label: "Comprimento", value: "15cm" }],
    category: "ela", tags: ["promoção"], priceBRL: 64.99, compareAtBRL: 79.99,
    images: [{ src: "https://nivelsecreto.com.br/wp-content/uploads/2025/05/20859-4-300x300.jpg", alt: "Vibrador duplo motor" }],
    inStock: true, beginnerFriendly: false,
  },
  {
    id: "9", slug: "plug-silicone-kit-iniciante", name: "Kit Plug Iniciante — 3 Tamanhos",
    shortBenefit: "Exploração gradual com total conforto",
    description: "Kit com 3 tamanhos progressivos em silicone médico. Base de segurança alargada, superfície acetinada. Inclui bolsa de armazenamento.",
    specs: [{ label: "Material", value: "Silicone médico" }, { label: "Peças", value: "3 tamanhos progressivos" }, { label: "Extras", value: "Bolsa de armazenamento" }],
    category: "iniciantes", tags: ["iniciante", "kit"], priceBRL: 89.90, compareAtBRL: 119.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Kit plug iniciante com 3 tamanhos" }],
    inStock: true, beginnerFriendly: true,
  },
  {
    id: "10", slug: "masturbador-automatico-rotativo", name: "Masturbador Automático Premium",
    shortBenefit: "Tecnologia a serviço do prazer masculino",
    description: "Movimentos rotativos e de sucção automáticos com 7 modos. Recarregável, material interno TPE de toque ultra realista.",
    specs: [{ label: "Material", value: "TPE premium" }, { label: "Modos", value: "7 automáticos" }, { label: "Bateria", value: "Recarregável USB" }],
    category: "ele", tags: ["tecnologia"], priceBRL: 299.90, compareAtBRL: 379.90,
    images: [{ src: "/placeholder-product.jpg", alt: "Masturbador automático premium" }],
    inStock: true, beginnerFriendly: false,
  },
  {
    id: "kit-reconexao", slug: "kit-reconexao", name: "Kit Reconexão",
    shortBenefit: "Tudo o que vocês precisam para uma noite especial",
    description: "Um kit cuidadosamente montado para casais que querem redescobrir a intimidade. Inclui óleo de massagem sensorial, vela aromática e anel vibratório — o ponto de partida perfeito.",
    specs: [{ label: "Itens", value: "3 produtos" }, { label: "Ideal para", value: "Casais e iniciantes" }],
    category: "casais", tags: ["best-seller", "kit", "iniciante"],
    priceBRL: 149.90, compareAtBRL: 179.70,
    images: [{ src: "/placeholder-product.jpg", alt: "Kit Reconexão para casais" }],
    inStock: true, beginnerFriendly: true,
    bundle: { items: ["6", "7", "5"], bundlePriceBRL: 149.90 },
  },
  {
    id: "kit-iniciantes", slug: "kit-primeiros-passos", name: "Kit Primeiros Passos",
    shortBenefit: "Para quem quer começar com confiança",
    description: "Seleção pensada para quem está explorando pela primeira vez. Inclui vibrador duplo motor, óleo de massagem e guia de iniciantes digital.",
    specs: [{ label: "Itens", value: "2 produtos + guia digital" }, { label: "Ideal para", value: "Iniciantes" }],
    category: "iniciantes", tags: ["kit", "iniciante"],
    priceBRL: 89.90, compareAtBRL: 104.89,
    images: [{ src: "/placeholder-product.jpg", alt: "Kit Primeiros Passos para iniciantes" }],
    inStock: true, beginnerFriendly: true,
    bundle: { items: ["8", "6"], bundlePriceBRL: 89.90 },
  },
];

export function getProductsByCollection(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.tags.includes("best-seller"));
}

export function getBeginnerFriendly(): Product[] {
  return products.filter((p) => p.beginnerFriendly);
}
