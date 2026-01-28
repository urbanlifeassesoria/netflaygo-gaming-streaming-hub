// ZUSTAND STORE - Estado global de filtros y carrito
import { create } from 'zustand';

interface FilterState {
  category: string;
  priceRange: string;
  searchQuery: string;
  setCategory: (category: string) => void;
  setPriceRange: (range: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: 'all',
  priceRange: 'all',
  searchQuery: '',
  setCategory: (category) => set({ category }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  resetFilters: () => set({ category: 'all', priceRange: 'all', searchQuery: '' }),
}));

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (productId) => set((state) => {
    const existing = state.items.find(item => item.productId === productId);
    if (existing) {
      return {
        items: state.items.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    return { items: [...state.items, { productId, quantity: 1 }] };
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.productId !== productId),
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    ),
  })),
  clearCart: () => set({ items: [] }),
  getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));
