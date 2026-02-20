import Image from 'next/image';
import { rackets } from '@utils/mock';
import { FC } from 'react';
import { CARD_SIZES } from '@utils/constants';

import styles from './styles.module.css';

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
};

const RacketPage: FC<PageProps<'/rackets/[id]'>> = async ({ params }) => {
  const { bigWidth: width, bigHeight: height } = CARD_SIZES;
  const { id } = await params;
  const racket = rackets.find((racket) => racket.id === +id);

  if (!racket) return 'oops';

  const {
    name,
    description,
    imageUrl,
    price,
    brand: { name: brandName },
  } = racket;

  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <span className={styles.brandName}>{brandName}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.image}>
        <Image
          width={width}
          height={height}
          src={imageUrl}
          alt={name}
          unoptimized={true}
        />
      </div>
      <span className={styles.price}>€{price}</span>
    </div>
  );
};

export default RacketPage;
