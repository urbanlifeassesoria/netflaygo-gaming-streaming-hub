// FILTER SIDEBAR - Category and price filters
import { motion } from 'framer-motion';
import { categories, priceRanges } from '@/data/products';
import { useFilterStore } from '@/store/useStore';
import { ChevronDown, Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const FilterSidebar = ({ isMobile, onClose }: FilterSidebarProps) => {
  const { category, priceRange, setCategory, setPriceRange, resetFilters } = useFilterStore();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`${isMobile ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-xl p-6 overflow-y-auto' : 'w-64 shrink-0'}`}
    >
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-gaming text-xl font-bold flex items-center gap-2">
            <Filter className="w-5 h-5 text-secondary" />
            Filtros
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="space-y-6">
        {/* Categories */}
        <div className="glass rounded-xl p-4">
          <h3 className="font-gaming text-sm font-semibold text-secondary mb-4 flex items-center gap-2">
            <ChevronDown className="w-4 h-4" />
            Categorías
          </h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                  category === cat.id
                    ? 'bg-secondary/20 text-secondary border border-secondary/30'
                    : 'hover:bg-muted text-foreground/80'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="glass rounded-xl p-4">
          <h3 className="font-gaming text-sm font-semibold text-secondary mb-4 flex items-center gap-2">
            <ChevronDown className="w-4 h-4" />
            Precio
          </h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setPriceRange(range.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm ${
                  priceRange === range.id
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'hover:bg-muted text-foreground/80'
                }`}
              >
                {range.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Filters */}
        <button
          onClick={resetFilters}
          className="w-full py-2.5 rounded-lg border border-border hover:bg-muted transition-colors text-sm text-muted-foreground"
        >
          Limpiar filtros
        </button>

        {/* WhatsApp Support */}
        <div className="glass rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            ¿Necesitas ayuda?
          </p>
          <a
            href="https://wa.me/573116462203"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full inline-flex items-center justify-center gap-2 text-sm"
          >
            💬 WhatsApp Soporte
          </a>
        </div>
      </div>
    </motion.aside>
  );
};
