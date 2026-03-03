import { RacketsTop10 } from '@/app/components';
import { Suspense } from 'react';

import styles from './styles.module.css';

export default async function RacketsPage() {
  return (
    <>
        <h1>Топ 10 ракеток</h1>
        <div className={styles.racketsCarousel}>
            <Suspense fallback="Loading top 10 rackets...">
                <RacketsTop10 />
            </Suspense>
        </div>
    </>
  );
}
