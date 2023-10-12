'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/provider';
import HydrationZustand from '@/zustand/HydriationZustand';
import { ErrorBoundary } from 'react-error-boundary';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <SessionProvider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <HydrationZustand>
            <NextUIProvider>
              <QueryClientProvider client={queryClient}>
                <ChakraProvider>{children}</ChakraProvider>
              </QueryClientProvider>
            </NextUIProvider>
          </HydrationZustand>
        </ErrorBoundary>
      </SessionProvider>
    </>
  );
};

export default Providers;
