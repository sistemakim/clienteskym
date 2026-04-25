import HeroSearch from '@/components/home/HeroSearch';
import PromoBanner from '@/components/home/PromoBanner';
import FacebookFeed from '@/components/home/FacebookFeed';
import Catalog from '@/components/home/Catalog';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <PromoBanner />
      <FacebookFeed />
      <Catalog />
      <Contact />
      <Footer />
    </>
  );
}
