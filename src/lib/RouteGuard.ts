'use client';
import { useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';

export { RouteGuard };
interface RouteGuardProps {
  children: ReactNode;
}

function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const pathName = usePathname();
  const { accessToken } = useAppStore();

  useEffect(() => {
    // on initial load - run auth check
    if (accessToken) authCheck(pathName);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (publicPaths.includes(path)) {
      router.push('/');
      setAuthorized(true);
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}
