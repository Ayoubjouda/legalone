import { Icons } from '@/components/Icons';
import { AccountDashboardRoutes, DashboardRoutes } from '@/config/dashboard';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarSubmenu from './SidebarSubmenu';

function SidebarContent() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const routes =
    session?.user?.role === 'ADMIN' ? DashboardRoutes : AccountDashboardRoutes;
  return (
    <div className='flex h-full  flex-col justify-between bg-white px-3 py-4 '>
      <div>
        <div className='relative  inline-block  pl-1 text-black'>
          <span>Legal</span>
          <b>Centre</b>
        </div>
        <ul className='mt-6 flex flex-col gap-1'>
          {routes.map((route, index) => {
            const Icon = Icons[route.icon || 'arrowRight'];

            if (route?.routes.length > 0) {
              return (
                <>
                  <SidebarSubmenu
                    route={route.routes}
                    icon={route.icon}
                    name={route.name}
                    key={route.name}
                  />
                </>
              );
            } else {
              return (
                <Link
                  href={route.route}
                  key={route.name}
                  className={` relative   flex items-center rounded-md px-2 py-2 font-semibold  text-gray-800 ${
                    pathname === route.route
                      ? 'bg-gray-200 text-gray-800 dark:text-gray-100'
                      : ' hover:bg-gray-100  dark:text-gray-400'
                  }`}
                >
                  <Icon size={16} />
                  <span className='ml-4 text-base'>{route.name}</span>
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default SidebarContent;
