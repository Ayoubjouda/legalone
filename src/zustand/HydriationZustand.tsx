'use client';
import { useEffect, useState } from 'react';
import useAppStore from './store';

interface HydrationProps {
  children: React.ReactNode;
}

const HydrationZustand = ({ children }: HydrationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationZustand;
