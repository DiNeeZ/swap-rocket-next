export type Currency = {
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
