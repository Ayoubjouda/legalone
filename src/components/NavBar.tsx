'use client';
import { FC, useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import useAppStore from '@/zustand/store';
import { UserNav } from './user-nav';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Divider, Center } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const { currentUser } = useAppStore();
  const [mobileNavState, setmobileNavState] = useState<boolean>(false);
  const pathname = usePathname();
  const { isSidebarOpen, setSideBarState } = useAppStore();
  return (
    <nav className="font-plus-jakarta-sans flex flex-row sticky inset-0 bg-white  z-10 items-center justify-between self-stretch border-b-[1px] border-solid border-gray-600 px-8 md:px-[88px] py-[7px] text-xl text-black">
      <div className="flex w-[129.82px] flex-col items-center justify-center">
        <Link
          href={'/'}
          className="relative inline-block w-[129.82px]"
        >
          <span>Legal</span>
          <b>Center</b>
        </Link>
      </div>

      <div className="lg:hidden">
        {/*//! Fix this and don't foget to add the sheet Trigger */}
        <Sheet>
          <div onClick={() => setSideBarState(!isSidebarOpen)}>
            <Menu />
          </div>
          <SheetContent>
            <div className="font-button-nav   flex-col gap-[13px] text-left text-base text-gray-400">
              <div className="flex flex-col items-center justify-center p-2.5">
                <div className="flex flex-col items-start justify-center  gap-[28px]">
                  <div className="flex flex-col  items-start justify-center gap-[28px]">
                    <SheetTrigger asChild>
                      <Link
                        href={'/'}
                        className={cn('relative cursor-pointer text-grey', {
                          'text-black': pathname === '/services',
                        })}
                      >
                        Nos Services
                      </Link>
                    </SheetTrigger>
                    <SheetTrigger asChild>
                      <Link
                        href={'/'}
                        className="text-grey relative"
                        onClick={() => setmobileNavState(false)}
                      >
                        Outils et guides
                      </Link>
                    </SheetTrigger>
                  </div>
                  {/* <Divider orientation="horizontal" /> */}

                  {pathname === '/createsaas' ? (
                    <div className="text-sandybrown-100 flex flex-row items-center justify-center cursor-pointer">
                      <div className="border-sandybrown-100 flex flex-row items-start justify-start overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5">
                        <div className="relative font-semibold">
                          07 76 67 87 67
                        </div>
                      </div>
                    </div>
                  ) : currentUser ? (
                    <UserNav currentUser={currentUser} />
                  ) : (
                    <div className="flex flex-col justify-center  item-center gap-4">
                      <SheetTrigger asChild>
                        <Link
                          href={'login'}
                          className="text-grey relative w-fit"
                        >
                          Se Connecter
                        </Link>
                      </SheetTrigger>
                      <div className="text-sandybrown-100 flex flex-row items-start justify-start cursor-pointer">
                        <div className="border-sandybrown-100 flex flex-row items-start justify-start overflow-hidden rounded-md border-[1px] border-solid bg-white px-[18px] py-2.5">
                          <div className="relative font-semibold">
                            07 76 67 87 67
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="font-button-nav hidden  lg:flex flex-row items-start justify-start gap-[13px] text-left text-base text-gray-400">
        <div className="flex flex-col items-start justify-start p-2.5">
          <div className="flex flex-row items-center justify-center gap-[28px]">
            <div className="flex h-6 font-inter text-sm font-medium   flex-row items-center justify-start gap-[28px]">
              <Link
                href={'/'}
                className={cn('relative cursor-pointer hover:text-redish', {
                  'text-black': pathname === '/',
                })}
              >
                Accueil
              </Link>
              <Link
                href={'/tarifs'}
                className="relative  cursor-pointer hover:text-redish"
              >
                Tarifs
              </Link>
              <Link
                href={'/'}
                className=" relative hover:text-redish"
              >
                Outils et guides
              </Link>
            </div>

            {currentUser ? (
              <div className="w-10">
                <UserNav currentUser={currentUser} />
              </div>
            ) : (
              <div className="flex justify-center font-inter text-sm font-medium  items-center gap-4">
                <Link
                  href={'login'}
                  className=" relative   rounded-md  hover:text-redish"
                >
                  Connexion
                </Link>
                <Link
                  href={'signup'}
                  className=" relative bg-redish px-3 py-2 rounded-md text-white font-semibold"
                >
                  Lancez-vous
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
