import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary flex-col flex items-center justify-center">
      <div className="p-5">
        <h1 className="font-bold text-3xl">KYM, Novedades de moda y accesorios.</h1>
        <h1 className="font-bold text-2xl">Los mejores productos en pagos comodos.</h1>
      </div>
      <a href="https://www.facebook.com/modayaccesorioskym" className="p-3 bg-action text-white font-bold rounded-lg">Ver artículos</a>
      <img src="/sneaker.webp" alt="" width={300}/>
    </div>
  );
}
