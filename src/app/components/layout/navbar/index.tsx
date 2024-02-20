import Link from 'next/link';
import MobileMenu from './mobile-menu';

const menu = [
  { title: 'Sobre Luz Mística', description: 'Conoce más acerca de nosotros', path: '/nosotros' },
  { title: 'Contacto', description: 'Ponte en contacto con nosotros', path: '/contacto' },
  { title: 'Aromas', description: 'Descubre nuestra gran variedad de aromas', path: '/aromas' }
];

export default async function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between  border-b border-black bg-white p-2 px-6 ">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full">
            <div className="grid place-items-center">
              {' '}
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: any) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      // className="text-gray-700 underline-offset-4 hover:text-purple-600 hover:underline"
                    >
                      <h2
                        className={` text-lg text-black underline-offset-4 hover:text-purple-600 hover:underline `}
                      >
                        {item.title}
                      </h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
