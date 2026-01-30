// PRODUCT CARD - Card con IMAGEN REAL del logo + compra directa WhatsApp
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, MessageCircle, Shield } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // COMPRA DIRECTA WHATSAPP (Sin carrito)
  const handleWhatsAppBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(
      `¡Hola Netflaygo! 🎮\n\nQuiero comprar:\n📦 ${product.name}\n💰 ${formatPrice(product.price)}\n⏱️ Garantía: ${product.warranty}\n\n¡Espero su respuesta!`
    );
    window.open(`https://wa.me/573116462203?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/producto/${product.slug}`}>
        <div className="card-gaming h-full p-4 flex flex-col">
          {/* Header - IMAGEN LOGO del servicio */}
          <div className="flex items-start justify-between mb-3">
            {product.logo ? (
              // IMAGEN REAL del logo
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <img 
                  src={product.logo} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ) : (
              // Fallback con emoji
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${product.color}20` }}
              >
                {product.icon}
              </div>
            )}
            <div className="text-right">
              <div className="font-gaming text-lg font-bold text-accent">
                {formatPrice(product.price)}
              </div>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
            {product.name}
          </h3>

          {/* Warranty Badge */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <Shield className="w-3 h-3 text-green-500" />
            <span>{product.warranty} garantía</span>
          </div>

          {/* Actions - COMPRA DIRECTA */}
          <div className="flex gap-2 mt-auto">
            <Link
              to={`/producto/${product.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>Ver</span>
            </Link>
            <button
              onClick={handleWhatsAppBuy}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg btn-gaming text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
