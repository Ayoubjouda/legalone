'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

interface ProvidersProps {
  children: ReactNode;
}

// const options = {
//   // passing the client secret obtained from the server
//   clientSecret: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!,
// };

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>{children}</ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
