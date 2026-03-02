import { getRackets } from '@/services/getRackets';
import { Card } from '../Card/Card';
import styles from './styles.module.css';


export const RacketsPage = async () => {
  const { isError, data: rackets } = await getRackets({ page: 1, limit: 20 })

  if (isError) return 'Error rackets'
  if (!rackets) return 'No rackets data'

  return (
    <div className={styles.wrapper}>
      {rackets.map(({ id, imageUrl, name }) => {
        return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
      })}
    </div>
  );
}
