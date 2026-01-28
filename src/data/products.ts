// PRODUCTS DATA - Catálogo completo Netflaygo
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'streaming' | 'iptv' | 'office' | 'gaming';
  price: number;
  warranty: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
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
    color: '#E50914'
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
    color: '#113CCF'
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
    color: '#113CCF'
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
    color: '#5822B4'
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
    color: '#00A8E1'
  },
  {
    id: '6',
    slug: 'plex',
    name: 'Plex',
    category: 'streaming',
    price: 7000,
    warranty: '28 días',
    description: 'Servidor multimedia con catálogo extenso',
    features: ['Catálogo completo', 'Múltiples plataformas', 'Servidor privado', 'Sin límites'],
    icon: '🎞️',
    color: '#E5A00D'
  },
  {
    id: '7',
    slug: 'claro-video-win',
    name: 'Claro Video Win+',
    category: 'streaming',
    price: 15000,
    warranty: '28 días',
    description: 'Claro Video con Win+ Sports incluido',
    features: ['Deportes en vivo', 'Películas', 'Series', 'Win Sports+', 'Liga Colombiana'],
    icon: '⚽',
    color: '#DA291C'
  },
  {
    id: '8',
    slug: 'directvgo-win',
    name: 'DirecTV Go Win+',
    category: 'streaming',
    price: 30000,
    warranty: '28 días',
    description: 'DirecTV Go premium con Win Sports+',
    features: ['TV en vivo', 'Win Sports+', 'HBO', 'ESPN', 'Deportes premium'],
    icon: '📡',
    color: '#00A1DE'
  },
  // IPTV/DEPORTES
  {
    id: '9',
    slug: 'megatv-1conn',
    name: 'MegaTV 1 Conexión',
    category: 'iptv',
    price: 10000,
    warranty: '1 mes',
    description: 'IPTV premium con +5000 canales en vivo',
    features: ['+5000 canales', 'Deportes en vivo', 'Películas 24/7', 'Series', 'PPV incluido'],
    icon: '📺',
    color: '#FF6B35'
  },
  {
    id: '10',
    slug: 'megatv-2conn',
    name: 'MegaTV 2 Conexiones',
    category: 'iptv',
    price: 15000,
    warranty: '1 mes',
    description: 'IPTV premium para 2 dispositivos simultáneos',
    features: ['2 dispositivos', '+5000 canales', 'Deportes HD', 'VOD incluido', 'EPG completo'],
    icon: '📺',
    color: '#FF6B35'
  },
  {
    id: '11',
    slug: 'movistar-espn',
    name: 'Movistar TV ESPN',
    category: 'iptv',
    price: 10000,
    warranty: '28 días',
    description: 'Movistar TV con ESPN y deportes premium',
    features: ['ESPN incluido', 'LaLiga', 'Champions', 'Movistar+', 'Fútbol mundial'],
    icon: '⚽',
    color: '#019DF4'
  },
  {
    id: '12',
    slug: 'apple-tv',
    name: 'Apple TV+',
    category: 'iptv',
    price: 10000,
    warranty: '28 días',
    description: 'Contenido exclusivo de Apple con MLS Season Pass',
    features: ['Apple Originals', 'MLS Season Pass', '4K Dolby Vision', 'Dolby Atmos', 'Sin anuncios'],
    icon: '🍎',
    color: '#555555'
  },
  {
    id: '13',
    slug: 'iptv-1conn-mes',
    name: 'IPTV 1 Conn/Mes',
    category: 'iptv',
    price: 12000,
    warranty: '1 mes',
    description: 'IPTV básico mensual con canales premium',
    features: ['+3000 canales', 'HD/FHD', 'Deportes', 'Películas', 'Soporte técnico'],
    icon: '📡',
    color: '#9333EA'
  },
  {
    id: '14',
    slug: 'iptv-1conn-trimestre',
    name: 'IPTV 1 Conn/3 Meses',
    category: 'iptv',
    price: 90000,
    warranty: '3 meses',
    description: 'IPTV trimestral con mejor precio',
    features: ['+3000 canales', 'Ahorro 25%', 'Soporte prioritario', 'Actualizaciones', 'EPG'],
    icon: '📡',
    color: '#9333EA'
  },
  {
    id: '15',
    slug: 'vix-plus',
    name: 'ViX+',
    category: 'iptv',
    price: 7000,
    warranty: '1 mes',
    description: 'Streaming latino con deportes y entretenimiento',
    features: ['Liga MX', 'Boxeo', 'Telenovelas', 'Películas', 'Sin anuncios'],
    icon: '🌮',
    color: '#FF6B00'
  },
  // OFFICE/DISEÑO
  {
    id: '16',
    slug: 'office-365',
    name: 'Office 365 (5 disp)',
    category: 'office',
    price: 40000,
    warranty: '1 año',
    description: 'Microsoft 365 completo para 5 dispositivos',
    features: ['Word, Excel, PowerPoint', 'OneDrive 1TB', 'Outlook', '5 dispositivos', 'Actualizaciones'],
    icon: '📊',
    color: '#D83B01'
  },
  {
    id: '17',
    slug: 'canva-pro-1mes',
    name: 'Canva Pro 1 Mes',
    category: 'office',
    price: 7000,
    warranty: '1 mes',
    description: 'Diseño profesional sin límites',
    features: ['Templates premium', 'Brand Kit', 'Remover fondo', 'Magic Resize', 'Contenido ilimitado'],
    icon: '🎨',
    color: '#00C4CC'
  },
  {
    id: '18',
    slug: 'canva-pro-4mes',
    name: 'Canva Pro 4 Meses',
    category: 'office',
    price: 20000,
    warranty: '4 meses',
    description: 'Canva Pro con descuento trimestral',
    features: ['Todo Canva Pro', 'Ahorro 28%', 'Soporte premium', 'Colaboración', 'Exportar HD'],
    icon: '🎨',
    color: '#00C4CC'
  },
  {
    id: '19',
    slug: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'office',
    price: 18000,
    warranty: '1 mes',
    description: 'Editor de video profesional con IA',
    features: ['Sin marca de agua', 'Efectos premium', 'IA avanzada', 'Exportar 4K', 'Templates exclusivos'],
    icon: '🎬',
    color: '#000000'
  },
  {
    id: '20',
    slug: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'office',
    price: 12000,
    warranty: '1 mes',
    description: 'IA de Google avanzada para productividad',
    features: ['IA generativa', 'Integración Google', 'Sin límites', 'Prioridad', 'API access'],
    icon: '🤖',
    color: '#4285F4'
  },
  // GAMING PS4/PS5
  {
    id: '21',
    slug: 'fifa-25-ps5',
    name: 'FIFA 25 PS5',
    category: 'gaming',
    price: 25000,
    warranty: 'Permanente',
    description: 'EA Sports FC 25 edición digital PS5',
    features: ['Digital PS5', 'Online multiplayer', 'Ultimate Team', 'Career Mode', 'Próxima gen'],
    icon: '⚽',
    color: '#1DB954'
  },
  {
    id: '22',
    slug: 'cod-ps5',
    name: 'Call of Duty PS5',
    category: 'gaming',
    price: 30000,
    warranty: 'Permanente',
    description: 'Call of Duty último título disponible',
    features: ['Campaign', 'Multiplayer', 'Zombies', 'Warzone access', 'Digital PS5'],
    icon: '🔫',
    color: '#1E1E1E'
  },
  {
    id: '23',
    slug: 'gta-v-ps4',
    name: 'GTA V PS4',
    category: 'gaming',
    price: 20000,
    warranty: 'Permanente',
    description: 'Grand Theft Auto V para PS4',
    features: ['Historia completa', 'GTA Online', 'Mundo abierto', 'Updates gratis', 'Multiplayer'],
    icon: '🚗',
    color: '#00A651'
  },
  {
    id: '24',
    slug: 'spider-man-ps5',
    name: 'Spider-Man Miles Morales PS5',
    category: 'gaming',
    price: 25000,
    warranty: 'Permanente',
    description: 'Marvel Spider-Man Miles Morales PS5',
    features: ['Ray Tracing', '60fps Mode', 'Historia nueva', 'DualSense', 'PS5 exclusivo'],
    icon: '🕷️',
    color: '#E23636'
  },
  {
    id: '25',
    slug: 'god-of-war-ragnarok',
    name: 'God of War Ragnarök PS5',
    category: 'gaming',
    price: 35000,
    warranty: 'Permanente',
    description: 'God of War Ragnarök edición digital',
    features: ['Historia épica', 'Gráficos 4K', 'DualSense', 'Modo Rendimiento', 'PS5 optimizado'],
    icon: '⚔️',
    color: '#003366'
  },
  {
    id: '26',
    slug: 'nba-2k25-ps5',
    name: 'NBA 2K25 PS5',
    category: 'gaming',
    price: 25000,
    warranty: 'Permanente',
    description: 'NBA 2K25 Next Gen para PS5',
    features: ['MyCareer', 'MyTeam', 'Online', 'Next Gen', 'Roster actualizado'],
    icon: '🏀',
    color: '#FF6600'
  },
  {
    id: '27',
    slug: 'tekken-8-ps5',
    name: 'Tekken 8 PS5',
    category: 'gaming',
    price: 30000,
    warranty: 'Permanente',
    description: 'Tekken 8 última entrega de la saga',
    features: ['32 luchadores', 'Online ranked', 'Story Mode', 'Arcade', 'Next Gen graphics'],
    icon: '👊',
    color: '#FF0000'
  },
  {
    id: '28',
    slug: 'crash-bandicoot-ps4',
    name: 'Crash Bandicoot PS4',
    category: 'gaming',
    price: 18000,
    warranty: 'Permanente',
    description: 'Crash Bandicoot N. Sane Trilogy',
    features: ['3 juegos', 'Remasterizado', 'Clásico', 'Familia', 'Nostalgia'],
    icon: '🦊',
    color: '#FF7F00'
  },
];

export const categories = [
  { id: 'all', name: 'Todos', icon: '🏠', count: products.length },
  { id: 'streaming', name: 'Streaming', icon: '🎬', count: products.filter(p => p.category === 'streaming').length },
  { id: 'gaming', name: 'PS4/PS5', icon: '🎮', count: products.filter(p => p.category === 'gaming').length },
  { id: 'iptv', name: 'IPTV/Deportes', icon: '📺', count: products.filter(p => p.category === 'iptv').length },
  { id: 'office', name: 'Office/Diseño', icon: '💼', count: products.filter(p => p.category === 'office').length },
];

export const priceRanges = [
  { id: 'all', name: 'Todos', min: 0, max: Infinity },
  { id: 'low', name: '$5k - $10k', min: 5000, max: 10000 },
  { id: 'mid', name: '$10k - $20k', min: 10000, max: 20000 },
  { id: 'high', name: '$20k+', min: 20000, max: Infinity },
];
