import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import Providers from './Providers';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import { getServerSession } from 'next-auth/next';
import type { Session } from 'next-auth';
import { authOption } from './api/auth/[...nextauth]/AuthOptions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['greek'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ibmPlexSans',
});

export const metadata: Metadata = {
  title: 'LegalCenter',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOption);
  return (
    <html lang='en'>
      <body
        className={` ${inter.variable} debug-screens ${ibmPlexSans.variable} max-w-screen relative  w-full overflow-clip`}
      >
        <Providers session={session}>{children}</Providers>
        <NextTopLoader
          showSpinner={false}
          easing='ease-in-out'
          color='#DD6135'
        />
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
