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

export type OrderData = {
  address: string;
  addressMap: string;
  currencyName: string;
  price: string;
  amount: number | "";
  mode: "buy" | "sell";
  hours: string;
};

export type OrderResponse = {
  address_exchanger: string;
  buy_or_sell: string;
  clients_telephone: string;
  created_at: string;
  currency_name: string;
  exchange_rate: string;
  id: number;
  order_sum: number;
  resource_uri: string;
  status: string;
};

export type OrderPostData = {
  address_exchanger: string;
  buy_or_sell: string;
  currency_name: string;
  exchange_rate: string;
  order_sum: number;
  clients_telephone: string;
};
