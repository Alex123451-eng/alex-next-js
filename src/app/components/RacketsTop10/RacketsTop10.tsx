import { Card } from '../Card/Card';
import { getRacketsTop10 } from '@/services/getRacketsTop10';

export const RacketsTop10 = async () => {
  const { isError, data: rackets } = await getRacketsTop10()

  if (isError) return 'Error top 10 rackets'
  if (!rackets) return 'No top 10 rackets data'

  return (
    <>
        {rackets.map(({ id, imageUrl, name }) => {
          return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
        })}
    </>
  );
}
