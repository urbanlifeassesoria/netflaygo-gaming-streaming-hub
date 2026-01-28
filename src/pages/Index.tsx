// HOME PAGE - Tienda principal Netflaygo
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { SupportSection } from '@/components/SupportSection';
import { Footer } from '@/components/Footer';
import { useFilterStore } from '@/store/useStore';

const Index = () => {
  const [searchParams] = useSearchParams();
  const setCategory = useFilterStore((state) => state.setCategory);

  // Handle category from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setCategory(category);
      // Scroll to products
      setTimeout(() => {
        document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams, setCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
