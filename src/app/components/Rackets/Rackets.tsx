import { Card } from '../Card/Card';
import { getRackets } from '@/services/getRackets';
import { notFound } from 'next/navigation';

export const Rackets = async () => {
  const { isError, data: rackets } = await getRackets({})

  if (isError) return 'Error rackets'
  if (!rackets) return 'no rackets'

  return (
    <>
        {rackets.map(({ id, imageUrl, name }) => {
          return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
        })}
    </>
  );
}
