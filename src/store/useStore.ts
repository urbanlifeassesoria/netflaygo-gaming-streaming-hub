// ZUSTAND STORE - Solo filtros (SIN CARRITO - compra directa WhatsApp)
import { create } from 'zustand';

// FILTROS STORE - Categorías, precios y búsqueda
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
