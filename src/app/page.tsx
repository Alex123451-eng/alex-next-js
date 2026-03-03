import styles from './page.module.css';

import { Rackets, RacketsTop10 } from './components';
import { Suspense } from 'react';

export default async function Home() {
  // TODO надо наверное вынести общую структуру страницы в layout
  return (
    <div className={styles.page}>
      <h1>Ракетки</h1>
      <div className={styles.racketsCarousel}>
        <Suspense fallback="Loading rackets...">
          <Rackets />
        </Suspense>
      </div>

      <h1>Топ 10 ракеток</h1>
      <div className={styles.racketsCarousel}>
        <Suspense fallback="Loading top 10 rackets...">
          <RacketsTop10 />
        </Suspense>
      </div>
    </div>
  );
}
