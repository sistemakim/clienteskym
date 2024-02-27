import { FacebookOutlined } from "@ant-design/icons"

export default function Home() {

  return (
    <div>

      <div className="bg-primary flex-col flex items-center justify-center">
        <div className="p-5">
          <h1 className="font-bold leading-8 text-3xl mb-2">Moda y accesorios KYM</h1>
          <h1 className="font-semibold text-2xl">Toda la elegancia a tu alcance</h1>
        </div>
        <a href="https://www.facebook.com/modayaccesorioskym" className="my-5 p-3 bg-action text-white font-bold rounded-lg text-xl flex items-center">
          <FacebookOutlined className="text-2xl" />
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
            Contamos con las mejores marcas de ropa, calzado, perfumes y accesorios de dama y caballero
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/13_Adidas_400.png"
              alt="Transistor"
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
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="data:image/png;base64,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"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/DKNY_logo.svg/2500px-DKNY_logo.svg.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/2560px-Reebok_2019_logo.svg.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Guess_logo.svg/2560px-Guess_logo.svg.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://searchlogovector.com/wp-content/uploads/2020/04/steve-madden-logo-vector.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>

  );
}
