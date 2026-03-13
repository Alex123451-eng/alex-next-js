import Image from 'next/image';
import { FC } from 'react';
import { CARD_SIZES } from '@utils/constants';

import styles from './styles.module.css';
import { getRacketById } from '@/services/getRacketById';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getMetaRacketById } from '@/services/getMetaRacketById';

export async function generateMetadata({ params }: PageProps<'/rackets/[id]'>): Promise<Metadata> {
  const { id } = await params
  const { isError, data } = await getMetaRacketById(id)

  if (isError || !data) {
    return {
      title: 'default title',
      description: 'default description',
    }
  }

  const { name: title, description } = data

  return {
    title,
    description
  }
}

const RacketPage: FC<PageProps<'/rackets/[id]'>> = async ({ params }) => {
  const { bigWidth: width, bigHeight: height } = CARD_SIZES;
  const { id } = await params;
  const { isError, data: racket } = await getRacketById(id)

  if (isError) throw new Error

  if (!racket) return notFound()

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
