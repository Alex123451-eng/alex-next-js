'use client';

import { usePathname } from 'next/navigation';
import cls from 'classnames';
import Link from 'next/link';
import { CustomLinkType } from './types';

export const CustomLink = ({ href, styles, name }: CustomLinkType) => {
    const pathName = usePathname();

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
    )
}