export type Currency = {
  string: {
    buy: string;
    sell: string;
    sum: string;
  };
};

export type Exchanger = {
  buy: string;
  currency: string;
  currency_id: string;
  exchanger: string;
  exchanger_id: string;
  id: number;
  resource_uri: string;
  sell: string;
  sum: number;
  updatedAt: string;
};

export type ExchangersResponse = {
  meta: {
    limit: number;
    next: null | number;
    offset: number;
    previous: null | number;
    total_count: number;
  };
  objects: Exchanger[];
};
