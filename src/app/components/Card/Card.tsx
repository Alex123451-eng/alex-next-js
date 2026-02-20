import Image from 'next/image';
import { CardType } from './types';
import Link from 'next/link';
import { CARD_SIZES } from '@utils/constants';

import styles from './styles.module.css';

export const Card = ({ imageUrl, name, id }: CardType) => {
  const { width, height } = CARD_SIZES;

  return (
    <div>
      <Link href={`rackets/${id}`}>
        <Image
          width={width}
          height={height}
          src={imageUrl}
          alt={name}
          unoptimized={true}
        />
        <div className={styles.title}>{name}</div>
      </Link>
    </div>
  );
};
