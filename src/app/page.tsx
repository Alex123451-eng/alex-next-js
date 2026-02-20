import styles from './page.module.css';

import { rackets } from '@utils/mock';
import { Card } from './components/Card/Card';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ракетки</h1>
      <div className={styles.racketsCarousel}>
        {rackets.map(({ id, imageUrl, name }) => {
          return <Card key={id} imageUrl={imageUrl} name={name} id={id} />;
        })}
      </div>
    </div>
  );
}
