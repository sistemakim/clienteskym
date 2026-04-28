import HeroSearch from '@/components/home/HeroSearch';
import PromoBanner from '@/components/home/PromoBanner';
import FacebookFeed from '@/components/home/FacebookFeed';
import Encargos from '@/components/home/Encargos';
import Catalog from '@/components/home/Catalog';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <PromoBanner />
      <FacebookFeed />
      <Encargos />
      <Catalog />
    </>
  );
}
