import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default async function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between  bg-white p-2 px-6 ">
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
            href={'/cuenta'}
          >
            <button
              className='bg-action p-2 rounded-lg text-white font-bold'
            >Consultar cuenta</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
