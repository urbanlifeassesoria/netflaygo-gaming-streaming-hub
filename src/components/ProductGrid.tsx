// PRODUCT GRID - Responsive grid with filters
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, List } from 'lucide-react';
import { products, priceRanges } from '@/data/products';
import { useFilterStore } from '@/store/useStore';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';

export const ProductGrid = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { category, priceRange, searchQuery } = useFilterStore();

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (category !== 'all' && product.category !== category) return false;

    // Price filter
    const range = priceRanges.find((r) => r.id === priceRange);
    if (range && range.id !== 'all') {
      if (product.price < range.min || product.price > range.max) return false;
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <section className="py-12 md:py-16" id="productos">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Nuestros Productos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Streaming, videojuegos y más. Entrega inmediata y garantía incluida.
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Products Area */}
          <div className="flex-1">
            {/* Mobile Filter Button + Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProducts.length}</span> productos encontrados
              </p>
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border hover:border-secondary transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtros</span>
              </button>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-gaming text-xl mb-2">No hay productos</h3>
                <p className="text-muted-foreground">
                  Intenta con otros filtros o búsqueda
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {showMobileFilters && (
          <FilterSidebar isMobile onClose={() => setShowMobileFilters(false)} />
        )}
      </div>
    </section>
  );
};
