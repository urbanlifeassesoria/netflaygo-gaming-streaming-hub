// HERO SECTION - Gaming animated hero con logo GRANDE (250px)
import { motion } from 'framer-motion';
import { Search, Sparkles, Tv, Zap, Briefcase } from 'lucide-react';
import { useFilterStore } from '@/store/useStore';
import logo from '@/assets/logo-netflaygo.jpeg';

export const Hero = () => {
  const { searchQuery, setSearchQuery, setCategory } = useFilterStore();

  const quickFilters = [
    { id: 'all', name: 'Todos', icon: Sparkles },
    { id: 'streaming', name: 'Streaming', icon: Tv },
    { id: 'iptv', name: 'IPTV/Deportes', icon: Zap },
    { id: 'office', name: 'Office', icon: Briefcase },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-background to-gaming-dark" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo - MÁS GRANDE (250px) con glow multicolor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src={logo}
            alt="Netflaygo"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-2xl shadow-2xl animate-float"
            style={{ 
              boxShadow: '0 0 80px rgba(139, 92, 246, 0.6), 0 0 120px rgba(236, 72, 153, 0.3)',
              filter: 'brightness(1.2) contrast(1.1)',
              maxWidth: '250px'
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-gaming text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Streaming + Gaming</span>
          <br />
          <span className="text-foreground">Sin Límites</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Netflix $15k | Disney+ $6k | Paramount+ $7k | IPTV 4K
          <br />
          <span className="text-secondary font-semibold">Entrega inmediata vía WhatsApp</span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar Netflix, Paramount+, IPTV..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/80 backdrop-blur-lg border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </motion.div>

        {/* Quick Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {quickFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setCategory(filter.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
            >
              <filter.icon className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
              <span className="font-medium">{filter.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-8 md:gap-16 mt-12"
        >
          {[
            { value: '500+', label: 'Clientes' },
            { value: '24+', label: 'Productos' },
            { value: '24/7', label: 'Soporte' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-gaming text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
