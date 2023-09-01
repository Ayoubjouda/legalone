'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import HydrationZustand from '@/zustand/HydriationZustand';
import { usePathname, useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';
interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  const pathName = usePathname();
  const router = useRouter();
  const { accessToken } = useAppStore();
  if (accessToken) {
    if (pathName === '/login' || pathName === '/signup') {
      router.push('/');
    }
  }

  return (
    <>
      <HydrationZustand>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
      </HydrationZustand>
    </>
  );
};

export default Providers;
