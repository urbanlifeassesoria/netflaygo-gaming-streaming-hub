// PRODUCTS DATA - Catálogo completo Netflaygo (SIN JUEGOS INDIVIDUALES)
// Los videojuegos se consultan por WhatsApp directamente

// IMPORTS DE LOGOS
import netflixLogo from '@/assets/logos/netflix.jpeg';
import disneyLogo from '@/assets/logos/disney.jpeg';
import primeLogo from '@/assets/logos/prime.jpeg';
import spotifyLogo from '@/assets/logos/spotify.jpeg';
import duolingoLogo from '@/assets/logos/duolingo.jpeg';
import plexLogo from '@/assets/logos/plex.jpeg';
import canvaLogo from '@/assets/logos/canva.jpeg';
import paramountLogo from '@/assets/logos/paramount.jpeg';
import crunchyrollLogo from '@/assets/logos/crunchyroll.jpeg';
import appletvlogo from '@/assets/logos/appletv.png';
import maxhboLogo from '@/assets/logos/maxhbo.png';
import clarovideoLogo from '@/assets/logos/clarovideo.jpg';
import directvgoLogo from '@/assets/logos/directvgo.jpg';
import megatvLogo from '@/assets/logos/megatv1.webp';
import movistartvLogo from '@/assets/logos/movistartv.png';
import iptvLogo from '@/assets/logos/iptv.jpg';
import vixLogo from '@/assets/logos/vix.png';
import officeLogo from '@/assets/logos/office365.png';
import catcupLogo from '@/assets/logos/capcut.jpg';
import geminiLogo from '@/assets/logos/gemini.jpg';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'streaming' | 'iptv' | 'office';
  price: number;
  warranty: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  logo?: string; // Imagen real del logo
}

export const products: Product[] = [
  // STREAMING
  {
    id: '1',
    slug: 'netflix-original',
    name: 'Netflix Original',
    category: 'streaming',
    price: 15000,
    warranty: '27 días',
    description: 'Acceso completo a Netflix con calidad 4K Ultra HD',
    features: ['4K Ultra HD', 'Sin anuncios', '1 dispositivo', 'Activación 5 min', 'Soporte 24/7'],
    icon: '🎬',
    color: '#E50914',
    logo: netflixLogo
  },
  {
    id: '2',
    slug: 'disney-espn',
    name: 'Disney+ ESPN',
    category: 'streaming',
    price: 10000,
    warranty: '28 días',
    description: 'Disney+ con ESPN incluido para deportes en vivo',
    features: ['4K Ultra HD', 'ESPN incluido', 'Marvel, Star Wars', 'Pixar', 'National Geographic'],
    icon: '✨',
    color: '#113CCF',
    logo: disneyLogo
  },
  {
    id: '3',
    slug: 'disney-plus',
    name: 'Disney+',
    category: 'streaming',
    price: 6000,
    warranty: '28 días',
    description: 'Todo el contenido de Disney, Pixar, Marvel y Star Wars',
    features: ['4K Ultra HD', 'Descargas offline', 'Perfiles múltiples', 'Control parental'],
    icon: '🏰',
    color: '#113CCF',
    logo: disneyLogo
  },
  {
    id: '4',
    slug: 'max',
    name: 'Max (HBO)',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'HBO, Warner Bros, DC y contenido exclusivo',
    features: ['4K Ultra HD', 'HBO Original', 'Warner Bros', 'DC Comics', 'Sin anuncios'],
    icon: '🎭',
    color: '#5822B4',
    logo: maxhboLogo
  },
  {
    id: '5',
    slug: 'prime-video',
    name: 'Prime Video',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'Amazon Prime Video con series y películas exclusivas',
    features: ['4K Ultra HD', 'Amazon Originals', 'X-Ray', 'Descargas', 'Thursday Night Football'],
    icon: '📺',
    color: '#00A8E1',
    logo: primeLogo
  },
  {
    id: '6',
    slug: 'paramount-plus',
    name: 'Paramount+',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'Películas Paramount, series exclusivas y deportes',
    features: ['4K Ultra HD', 'Películas Paramount', 'Series exclusivas', 'Deportes CBS', 'Sin anuncios'],
    icon: '⭐',
    color: '#0064FF',
    logo: paramountLogo
  },
  {
    id: '7',
    slug: 'crunchyroll',
    name: 'Crunchyroll',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'Anime sin límites, simulcasts y manga',
    features: ['Anime ilimitado', 'Simulcasts', 'Manga digital', 'Sin anuncios', 'Offline'],
    icon: '🍙',
    color: '#F47521',
    logo: crunchyrollLogo
  },
  {
    id: '8',
    slug: 'plex',
    name: 'Plex',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'Servidor multimedia con catálogo extenso',
    features: ['Catálogo completo', 'Múltiples plataformas', 'Servidor privado', 'Sin límites'],
    icon: '🎞️',
    color: '#E5A00D',
    logo: plexLogo
  },
  {
    id: '9',
    slug: 'claro-video-win',
    name: 'Claro Video Win+',
    category: 'streaming',
    price: 15000,
    warranty: '28 días',
    description: 'Claro Video con Win+ Sports incluido',
    features: ['Deportes en vivo', 'Películas', 'Series', 'Win Sports+', 'Liga Colombiana'],
    icon: '⚽',
    color: '#DA291C',
    logo: clarovideoLogo
  },
  {
    id: '10',
    slug: 'directvgo-win',
    name: 'DirecTV Go Win+',
    category: 'streaming',
    price: 30000,
    warranty: '28 días',
    description: 'DirecTV Go premium con Win Sports+',
    features: ['TV en vivo', 'Win Sports+', 'HBO', 'ESPN', 'Deportes premium'],
    icon: '📡',
    color: '#00A1DE',
    logo: directvgoLogo
  },
  // IPTV/DEPORTES
  {
    id: '11',
    slug: 'megatv-1conn',
    name: 'MegaTV 1 Conexión',
    category: 'iptv',
    price: 10000,
    warranty: '1 mes',
    description: 'IPTV premium con +5000 canales en vivo',
    features: ['+5000 canales', 'Deportes en vivo', 'Películas 24/7', 'Series', 'PPV incluido'],
    icon: '📺',
    color: '#FF6B35',
    logo: megatvLogo
  },
  {
    id: '12',
    slug: 'megatv-2conn',
    name: 'MegaTV 2 Conexiones',
    category: 'iptv',
    price: 15000,
    warranty: '1 mes',
    description: 'IPTV premium para 2 dispositivos simultáneos',
    features: ['2 dispositivos', '+5000 canales', 'Deportes HD', 'VOD incluido', 'EPG completo'],
    icon: '📺',
    color: '#FF6B35',
    logo: megatvLogo
  },
  {
    id: '13',
    slug: 'movistar-espn',
    name: 'Movistar TV ESPN',
    category: 'iptv',
    price: 10000,
    warranty: '28 días',
    description: 'Movistar TV con ESPN y deportes premium',
    features: ['ESPN incluido', 'LaLiga', 'Champions', 'Movistar+', 'Fútbol mundial'],
    icon: '⚽',
    color: '#019DF4',
    logo: movistartvLogo
  },
  {
    id: '14',
    slug: 'apple-tv',
    name: 'Apple TV+',
    category: 'iptv',
    price: 10000,
    warranty: '28 días',
    description: 'Contenido exclusivo de Apple con MLS Season Pass',
    features: ['Apple Originals', 'MLS Season Pass', '4K Dolby Vision', 'Dolby Atmos', 'Sin anuncios'],
    icon: '🍎',
    color: '#555555',
    logo: appletvlogo
  },
  {
    id: '15',
    slug: 'iptv-1conn-mes',
    name: 'IPTV 1 Conn/Mes',
    category: 'iptv',
    price: 12000,
    warranty: '1 mes',
    description: 'IPTV básico mensual con canales premium',
    features: ['+3000 canales', 'HD/FHD', 'Deportes', 'Películas', 'Soporte técnico'],
    icon: '📡',
    color: '#9333EA', 
    logo: iptvLogo
  },
  {
    id: '16',
    slug: 'iptv-1conn-trimestre',
    name: 'IPTV 1 Conn/3 Meses',
    category: 'iptv',
    price: 90000,
    warranty: '3 meses',
    description: 'IPTV trimestral con mejor precio',
    features: ['+3000 canales', 'Ahorro 25%', 'Soporte prioritario', 'Actualizaciones', 'EPG'],
    icon: '📡',
    color: '#9333EA',
    logo: iptvLogo
  },
  {
    id: '17',
    slug: 'vix-plus',
    name: 'ViX+',
    category: 'iptv',
    price: 7000,
    warranty: '1 mes',
    description: 'Streaming latino con deportes y entretenimiento',
    features: ['Liga MX', 'Boxeo', 'Telenovelas', 'Películas', 'Sin anuncios'],
    icon: '🌮',
    color: '#FF6B00',
    logo: vixLogo
  },
  // OFFICE/DISEÑO
  {
    id: '18',
    slug: 'office-365',
    name: 'Office 365 (5 disp)',
    category: 'office',
    price: 40000,
    warranty: '1 año',
    description: 'Microsoft 365 completo para 5 dispositivos',
    features: ['Word, Excel, PowerPoint', 'OneDrive 1TB', 'Outlook', '5 dispositivos', 'Actualizaciones'],
    icon: '📊',
    color: '#D83B01',
    logo: officeLogo
  },
  {
    id: '19',
    slug: 'canva-pro-1mes',
    name: 'Canva Pro 1 Mes',
    category: 'office',
    price: 7000,
    warranty: '1 mes',
    description: 'Diseño profesional sin límites',
    features: ['Templates premium', 'Brand Kit', 'Remover fondo', 'Magic Resize', 'Contenido ilimitado'],
    icon: '🎨',
    color: '#00C4CC',
    logo: canvaLogo
  },
  {
    id: '20',
    slug: 'canva-pro-4mes',
    name: 'Canva Pro 4 Meses',
    category: 'office',
    price: 20000,
    warranty: '4 meses',
    description: 'Canva Pro con descuento trimestral',
    features: ['Todo Canva Pro', 'Ahorro 28%', 'Soporte premium', 'Colaboración', 'Exportar HD'],
    icon: '🎨',
    color: '#00C4CC',
    logo: canvaLogo
  },
  {
    id: '21',
    slug: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'office',
    price: 18000,
    warranty: '1 mes',
    description: 'Editor de video profesional con IA',
    features: ['Sin marca de agua', 'Efectos premium', 'IA avanzada', 'Exportar 4K', 'Templates exclusivos'],
    icon: '🎬',
    color: '#000000',
    logo: catcupLogo
  },
  {
    id: '22',
    slug: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'office',
    price: 12000,
    warranty: '1 mes',
    description: 'IA de Google avanzada para productividad',
    features: ['IA generativa', 'Integración Google', 'Sin límites', 'Prioridad', 'API access'],
    icon: '🤖',
    color: '#4285F4',
    logo: geminiLogo
  },
  {
    id: '23',
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'streaming',
    price: 7000,
    warranty: '1 mes',
    description: 'Música sin límites, sin anuncios',
    features: ['Sin anuncios', 'Descargas offline', 'Calidad alta', 'Lyrics', 'Podcasts'],
    icon: '🎵',
    color: '#1DB954',
    logo: spotifyLogo
  },
  {
    id: '24',
    slug: 'duolingo-plus',
    name: 'Duolingo Plus',
    category: 'office',
    price: 7000,
    warranty: '1 mes',
    description: 'Aprende idiomas sin límites ni anuncios',
    features: ['Sin anuncios', 'Vidas ilimitadas', 'Práctica errores', 'Modo offline', 'Progreso guardado'],
    icon: '🦉',
    color: '#58CC02',
    logo: duolingoLogo
  },
];

export const categories = [
  { id: 'all', name: 'Todos', icon: '🏠', count: products.length },
  { id: 'streaming', name: 'Streaming', icon: '🎬', count: products.filter(p => p.category === 'streaming').length },
  { id: 'iptv', name: 'IPTV/Deportes', icon: '📺', count: products.filter(p => p.category === 'iptv').length },
  { id: 'office', name: 'Office/Diseño', icon: '💼', count: products.filter(p => p.category === 'office').length },
];

export const priceRanges = [
  { id: 'all', name: 'Todos', min: 0, max: Infinity },
  { id: 'low', name: '$5k - $10k', min: 5000, max: 10000 },
  { id: 'mid', name: '$10k - $20k', min: 10000, max: 20000 },
  { id: 'high', name: '$20k+', min: 20000, max: Infinity },
];
