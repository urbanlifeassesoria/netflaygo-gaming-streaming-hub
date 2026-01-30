// GAMING SECTION - Solo botón "Consultar Juegos Disponibles"
// Los videojuegos se consultan directamente por WhatsApp
import { motion } from 'framer-motion';
import { Gamepad2, MessageCircle } from 'lucide-react';

// Importar imágenes de juegos para mostrar galería
import fc25 from '@/assets/logos/fc25.jpeg';
import cod from '@/assets/logos/cod.jpeg';
import gta5 from '@/assets/logos/gta5.jpeg';
import spiderman from '@/assets/logos/spiderman.jpeg';
import godofwar from '@/assets/logos/godofwar.jpeg';
import nba2k from '@/assets/logos/nba2k.jpeg';
import tekken8 from '@/assets/logos/tekken8.jpeg';
import crash from '@/assets/logos/crash.jpeg';

const gameImages = [fc25, cod, gta5, spiderman, godofwar, nba2k, tekken8, crash];

export const GamingSection = () => {
  const handleConsultarJuegos = () => {
    const message = encodeURIComponent(
      `¡Hola Netflaygo! 🎮\n\nQuiero consultar el catálogo de videojuegos disponibles para PS4/PS5.\n\n¡Gracias!`
    );
    window.open(`https://wa.me/573116462203?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">🎮 Videojuegos PS4 / PS5</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8">
            Catálogo completo de juegos digitales PlayStation.
            <br />
            <span className="text-foreground font-medium">
              FIFA 25, Call of Duty, GTA V, Spider-Man, God of War y más...
            </span>
          </p>

          {/* Game Images Gallery */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {gameImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-border hover:border-secondary transition-colors"
              >
                <img 
                  src={img} 
                  alt={`Juego ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleConsultarJuegos}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{ 
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
            }}
          >
            <Gamepad2 className="w-6 h-6" />
            <span>Consultar Juegos Disponibles</span>
            <MessageCircle className="w-5 h-5" />
          </motion.button>

          {/* Info */}
          <p className="text-sm text-muted-foreground mt-6">
            📱 Respondemos en menos de 5 minutos • Entrega inmediata
          </p>
        </motion.div>
      </div>
    </section>
  );
};
