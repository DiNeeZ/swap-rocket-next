export type Currency = {
  string: {
    buy: string;
    sell: string;
    sum: string;
  };
};

export type Exchanger = {
  address: string;
  address_map: string;
  buy: string;
  currency: string;
  currency_id: string;
  currency_name: string;
  exchanger: string;
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

export type OrderData = {
  address: string;
  addressMap: string;
  currencyName: string;
  price: string;
  amount: number | "";
  mode: "buy" | "sell";
};
