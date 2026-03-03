import { RacketsPage as RacketsPageComponent } from '../components';
import { Suspense } from 'react';


export default async function RacketsPage() {
  return (
    <Suspense fallback="Loading rackets' grid">
      <RacketsPageComponent />
    </Suspense>
  );
}
