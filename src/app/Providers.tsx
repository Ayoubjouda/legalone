'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import HydrationZustand from '@/zustand/HydriationZustand';
import { ErrorBoundary } from 'react-error-boundary';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import ErrorPageFallBack from '@/components/sections/ErrorPageFallBack';

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        retry: false,
      },
    },
  });

  return (
    <>
      <SessionProvider session={session}>
        <ErrorBoundary fallback={<ErrorPageFallBack />}>
          <HydrationZustand>
            <NextUIProvider className='h-full'>
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
