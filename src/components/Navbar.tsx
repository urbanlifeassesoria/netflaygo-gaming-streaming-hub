// NAVBAR - Glassmorphism sticky navigation
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-netflaygo.jpeg';
import { useCartStore } from '@/store/useStore';

const navLinks = [
  { name: 'Tienda', href: '/' },
  { name: 'Streaming', href: '/?category=streaming' },
  { name: 'Videojuegos', href: '/?category=gaming' },
  { name: 'Soporte', href: '/#soporte' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Netflaygo 🎮, quiero información sobre sus servicios');
    window.open(`https://wa.me/573116462203?text=${message}`, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Netflaygo"
              className="h-10 md:h-12 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-xs flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="hidden sm:flex btn-gaming text-sm items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleWhatsApp}
              className="w-full mt-4 btn-whatsapp flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar WhatsApp</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
