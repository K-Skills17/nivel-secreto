import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: string;
  slug: string;
  name: string;
  priceBRL: number;
  image: { src: string; alt: string };
  category: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: CartProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  total: () => number;
  itemCount: () => number;
  pixTotal: () => number;
  freeShippingRemaining: () => number;
}

const FREE_SHIPPING_THRESHOLD = 199;
const PIX_DISCOUNT = 0.05;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { product, quantity: 1 }], isOpen: true };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.product.id !== id) })),
      updateQuantity: (id, qty) =>
        set((state) => ({
          items: qty <= 0
            ? state.items.filter((i) => i.product.id !== id)
            : state.items.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i)),
        })),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      setCartOpen: (open) => set({ isOpen: open }),
      total: () => get().items.reduce((s, i) => s + i.product.priceBRL * i.quantity, 0),
      itemCount: () => get().items.reduce((s, i) => s + i.quantity, 0),
      pixTotal: () => get().total() * (1 - PIX_DISCOUNT),
      freeShippingRemaining: () => Math.max(0, FREE_SHIPPING_THRESHOLD - get().total()),
    }),
    { name: "nivel-secreto-cart" }
  )
);
