import Button from '@/components/ui/button';
import type { Exchanger } from '@/components/exchangers-result';
import styles from './index.module.css';
import { Location } from '@/components/ui/icons';
import Link from 'next/link';

export function ExchangerCard({ exchanger }: { exchanger: Exchanger }) {
  return (
    <article className={styles.card}>
      <div>
        <div>
          <span>41.90</span>
          <span>{exchanger.address}</span>
        </div>
        <div>
          <Link href={'/'}>
            <Location />
            <span>Маршрут</span>
          </Link>
        </div>
      </div>
      <Button>Забронювати</Button>
    </article>
  );
}
