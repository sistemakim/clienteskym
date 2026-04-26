import HeroSearch from '@/components/home/HeroSearch';
import PromoBanner from '@/components/home/PromoBanner';
import FacebookFeed from '@/components/home/FacebookFeed';
import Catalog from '@/components/home/Catalog';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import Reveal from '@/components/motion/Reveal';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <Reveal intensity="strong"><PromoBanner /></Reveal>
      <Reveal intensity="strong"><FacebookFeed /></Reveal>
      <Reveal intensity="strong"><Catalog /></Reveal>
      <Reveal intensity="strong"><Contact /></Reveal>
      <Reveal intensity="strong"><Footer /></Reveal>
    </>
  );
}
