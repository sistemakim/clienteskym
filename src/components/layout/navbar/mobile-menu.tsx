'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md  text-black transition-colors md:hidden dark:text-black"
      >
        <Bars3Icon className="h-7" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-white/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="w-50 fixed bottom-0 left-0 right-0 top-0 flex h-full flex-col bg-white pb-6 ">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors "
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <ul className="flex w-full flex-col">
                  <li
                    className="space-y-6 py-2 text-2xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                    key="2"
                  >
                    <h2 className="  text-black">
                      {' '}
                      <Link href="/" onClick={closeMobileMenu}>
                        Aromas
                      </Link>
                    </h2>
                    <h2 className=" text-black">
                      {' '}
                      <Link href="/" onClick={closeMobileMenu}>
                        Presentaciones
                      </Link>
                    </h2>
                    <h2 className=" text-black">
                      {' '}
                      <Link href="/" onClick={closeMobileMenu}>
                        Sobre Luz Mística
                      </Link>
                    </h2>
                    <h2 className=" text-black">
                      {' '}
                      <Link href="/" onClick={closeMobileMenu}>
                        Contacto
                      </Link>
                    </h2>
                  </li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
