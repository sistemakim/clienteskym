import { FacebookOutlined } from "@ant-design/icons"
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div className="bg-primary flex-col flex items-center justify-center">
        <div className="p-5">
          <h1 className="font-bold leading-8 text-3xl mb-2">Novedades de moda y accesorios.</h1>
          <h1 className="font-semibold text-2xl">Los mejores productos en pagos cómodos.</h1>
        </div>
        <a href="https://www.facebook.com/modayaccesorioskym" className="my-5 p-3 bg-action text-white font-bold rounded-lg text-xl flex items-center">
          <FacebookOutlined className="text-2xl"/>
          <button className="ml-2">Ver artículos</button>
        </a>
        <img src="/hero-image-group.png" alt="productos" width={350} />
      </div>
      {/* Logo cloud */}
      <div className="relative isolate -z-10 mt-10 sm:mt-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold leading-8 text-gray-900">
            Contamos con las mejores marcas
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/13_Adidas_400.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/14_Chanel_400.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/10_Coach_400.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://viladecans.thestyleoutlets.es/sites/default/files/nautica.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <h2 className="text-center text-xl font-semibold leading-8 text-gray-900 mt-5">
            Y muchas más!
          </h2>
        </div>
      </div>
    </div>

  );
}
