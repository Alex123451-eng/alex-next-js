import { Roboto } from 'next/font/google';
import './globals.css';


import { COLORS } from '@utils/constants';

import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Layout } from './components/layout/layout';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Racket site',
  description: 'Description of the racket site'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={COLORS} className={`${roboto.variable}`}>
        <NextTopLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
