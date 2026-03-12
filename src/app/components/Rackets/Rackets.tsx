import { Card } from '../Card/Card';
import { getRackets } from '@/services/getRackets';

export const Rackets = async () => {
  const { isError, data: rackets } = await getRackets({})

  if (isError) throw new Error
  if (!rackets) return 'no rackets'

  return (
    <>
        {rackets.map(({ id, imageUrl, name }) => {
          return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
        })}
    </>
  );
}
