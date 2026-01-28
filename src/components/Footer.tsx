// FOOTER - Gaming footer with payment methods
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo-netflaygo.jpeg';

export const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Netflaygo 🎮, necesito información');
    window.open(`https://wa.me/573116462203?text=${message}`, '_blank');
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Netflaygo" className="w-16 h-16 rounded-xl" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Tu tienda de confianza para streaming y videojuegos en Colombia. 
              Entrega inmediata y soporte 24/7.
            </p>
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              +57 311 646 2203
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-gaming text-sm font-semibold text-secondary mb-4">
              Categorías
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Streaming', href: '/?category=streaming' },
                { name: 'Videojuegos PS4/PS5', href: '/?category=gaming' },
                { name: 'IPTV & Deportes', href: '/?category=iptv' },
                { name: 'Office & Diseño', href: '/?category=office' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-gaming text-sm font-semibold text-secondary mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-green-500" />
                +57 311 646 2203
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                Barranquilla, Colombia
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary" />
                Soporte 24/7
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-gaming text-sm font-semibold text-secondary mb-4">
              Métodos de Pago
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Nequi', 'Daviplata', 'Bancolombia', 'Efecty', 'Binance'].map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 rounded-lg bg-muted text-xs font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              ✅ 100% Garantía de reembolso
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Netflaygo. Todos los derechos reservados. 
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Barranquilla, Colombia
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Est. 2017</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Diseño by BryDesignArt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
