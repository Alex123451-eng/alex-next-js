import { Roboto } from 'next/font/google';
import './globals.css';

import cls from 'classnames';

import { COLORS } from '@utils/constants';

import { LINKS_MAIN } from '@utils/constants';
import styles from './styles.module.css';
import { Metadata } from 'next';
import { CustomLink } from './components/CustomLink/CustomLink';
import NextTopLoader from 'nextjs-toploader';

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
        <header className={cls(styles.header)}>
          {LINKS_MAIN.map(({ name, href }) => {
            return (
              <CustomLink key={href} name={name} href={href} styles={styles} />
            );
          })}
        </header>
        {children}
        <footer className={cls(styles.footer)}>
          Мой замечательный footer 2026
        </footer>
      </body>
    </html>
  );
}
