import HeroSearch from '@/components/home/HeroSearch';
import PromoBanner from '@/components/home/PromoBanner';
import FacebookFeed from '@/components/home/FacebookFeed';
import Encargos from '@/components/home/Encargos';
import ProductRange from '@/components/home/ProductRange';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <PromoBanner />
      <FacebookFeed />
      <Encargos />
      <ProductRange />
    </>
  );
}
