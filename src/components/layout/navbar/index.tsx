'use client'
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const pathname = usePathname()
  let link = { path: '/cuenta', label: 'Consultar cuenta' }
  switch (pathname) {
    case '/cuenta':
      link = { path: '/', label: 'Inicio' }
      break;
    default:
      link = { path: '/cuenta', label: 'Consultar cuenta' }
      break;
  }

  return (
    <nav className="flex items-center justify-between  bg-white p-2 px-6 ">
      {/* <div className="block flex-none md:hidden">
          <MobileMenu />
        </div> */}
      <div className="flex w-full items-center h-[5rem]">
        <div className="flex w-full justify-between sm:pr-11 items-center">
          <Link
            href={'/'}
          >
            <img src="/logo.png" alt="logo" width={60} />
          </Link>
          <Link
            href={link.path}
          >
            <button
              className='bg-action p-2 rounded-lg text-white font-bold'
            >{link.label}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
