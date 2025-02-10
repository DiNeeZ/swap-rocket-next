'use client';

import { useQuery } from '@tanstack/react-query';
import { Container } from '../ui/container';
import styles from './index.module.css';
import { ExchangerCard } from '../exchanger-card';

type Currency = {
  string: {
    buy: string;
    sell: string;
    sum: string;
  };
};

export type Exchanger = {
  address: string;
  created_at: string;
  currency: Currency;
  exchanger_info: string;
  id: number;
  resource_uri: string;
  telephone: string;
  updatedAt: string;
  working_hours: string;
};

type ExchangersResponse = {
  meta: {
    limit: number;
    next: null | number;
    offset: number;
    previous: null | number;
    total_count: number;
  };
  objects: Exchanger[];
};

async function getPosts(): Promise<ExchangersResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  return response.json();
}

export default function ExchangersResult() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  console.log(data);

  return (
    <section className={styles.result}>
      <Container>
        <ul className={styles.list}>
          {data?.objects.map((item) => (
            <li key={item.id}>
              <ExchangerCard exchanger={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
