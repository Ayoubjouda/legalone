'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import HydrationZustand from '@/zustand/HydriationZustand';
import { usePathname, useRouter } from 'next/navigation';
import useAppStore from '@/zustand/store';
import { ErrorBoundary } from 'react-error-boundary';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <HydrationZustand>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider>{children}</ChakraProvider>
          </QueryClientProvider>
        </HydrationZustand>
      </ErrorBoundary>
    </>
  );
};

export default Providers;
