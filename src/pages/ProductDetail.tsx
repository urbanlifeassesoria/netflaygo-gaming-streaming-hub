// PRODUCT DETAIL PAGE - Full product page with WhatsApp checkout
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  Zap, 
  Check, 
  MessageCircle, 
  Star,
  ChevronRight 
} from 'lucide-react';
import { products } from '@/data/products';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    metodoPago: 'Nequi',
    cantidad: 1,
    notas: '',
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-gaming text-4xl mb-4">404</h1>
          <p className="text-muted-foreground mb-6">Producto no encontrado</p>
          <Link to="/" className="btn-gaming">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const total = product.price * formData.cantidad;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const nombreClean = formData.nombre.trim().slice(0, 100);
    const whatsappClean = formData.whatsapp.replace(/[^0-9]/g, '').slice(0, 15);
    const notasClean = formData.notas.trim().slice(0, 200);
    
    if (!nombreClean || !whatsappClean) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    const message = `Hola Netflaygo 🎮,

PEDIDO NUEVO:
━━━━━━━━━━━━━━━
📦 Producto: ${product.name}
🔢 Cantidad: ${formData.cantidad}
💰 Total: ${formatPrice(total)}
━━━━━━━━━━━━━━━

👤 Nombre: ${nombreClean}
📱 WhatsApp: ${whatsappClean}
💳 Método de Pago: ${formData.metodoPago}
${notasClean ? `📝 Notas: ${notasClean}` : ''}

¡Listo para pagar! 🚀`;

    window.open(`https://wa.me/573116462203?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Tienda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="capitalize">{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  {product.icon}
                </div>
                <div>
                  <h1 className="font-gaming text-3xl md:text-4xl font-bold mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-green-500">
                      <Shield className="w-4 h-4" />
                      {product.warranty} garantía
                    </span>
                    <span className="flex items-center gap-1 text-sm text-secondary">
                      <Zap className="w-4 h-4" />
                      Entrega inmediata
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="glass rounded-xl p-6 mb-6">
                <div className="font-gaming text-4xl font-bold gradient-text mb-2">
                  {formatPrice(product.price)}
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Features */}
              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="font-gaming text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary" />
                  Características
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                {['Activación 5 min', 'Soporte 24/7', '100% Garantía'].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
                  >
                    ✅ {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Order Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="gradient-border rounded-2xl p-6 md:p-8 sticky top-24">
                <h2 className="font-gaming text-xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  Comprar vía WhatsApp
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      WhatsApp * (+57)
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/[^0-9]/g, '') })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="3001234567"
                    />
                  </div>

                  {/* Método de Pago */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Método de Pago
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Nequi', 'Daviplata', 'Efecty', 'Bancolombia', 'Binance', 'Otro'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, metodoPago: method })}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.metodoPago === method
                              ? 'bg-secondary/20 text-secondary border border-secondary'
                              : 'bg-muted border border-border hover:border-secondary/50'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cantidad */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cantidad
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, cantidad: Math.max(1, formData.cantidad - 1) })}
                        className="w-10 h-10 rounded-lg bg-muted border border-border hover:border-secondary flex items-center justify-center text-xl"
                      >
                        −
                      </button>
                      <span className="font-gaming text-xl w-12 text-center">
                        {formData.cantidad}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, cantidad: Math.min(10, formData.cantidad + 1) })}
                        className="w-10 h-10 rounded-lg bg-muted border border-border hover:border-secondary flex items-center justify-center text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Notas */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Notas (opcional)
                    </label>
                    <textarea
                      value={formData.notas}
                      maxLength={200}
                      onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                      rows={2}
                      placeholder="Información adicional..."
                    />
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Total a pagar:</span>
                      <span className="font-gaming text-2xl font-bold gradient-text">
                        {formatPrice(total)}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gaming py-4 text-lg font-bold flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      COMPRAR AHORA
                    </button>

                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Serás redirigido a WhatsApp con tu pedido listo
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
