import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'LegalCenter',
  description: 'Generated by create next app',
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex min-h-screen">{children}</section>;
}
