import { Card } from '../components/Card/Card';
import styles from './styles.module.css';
import { rackets } from '@utils/mock';

export default function RacketsPage() {
  return (
    <div className={styles.wrapper}>
      {rackets.map(({ id, imageUrl, name }) => {
        return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
      })}
    </div>
  );
}
