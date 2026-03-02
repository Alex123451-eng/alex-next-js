'use client';

import { Roboto } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cls from 'classnames';

import { COLORS } from '@utils/constants';

import { LINKS_MAIN } from '@utils/constants';
import styles from './styles.module.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  // TODO сделать собственный Link, для которого будет написана логика выделения
  // чтобы не писать каждый раз
  return (
    <html lang="en">
      <body style={COLORS} className={`${roboto.variable}`}>
        <header className={cls(styles.header)}>
          {LINKS_MAIN.map(({ name, href }) => {
            return (
              <Link
                key={href}
                href={href}
                className={cls(styles.link, {
                  [styles.activeLink]: href === pathName,
                })}
              >
                {name}
              </Link>
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
