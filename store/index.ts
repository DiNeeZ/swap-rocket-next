import { ExchangersResponse, OrderData } from "@/types";
import { createStore } from "zustand/vanilla";

export type ExchangersState = {
  data: ExchangersResponse | undefined;
  orderData: OrderData | undefined;
  isOrderBarOpen: boolean;
  exchangerMode: "buy" | "sell";
  amount: number | "";
  isLoading: boolean;
  error: Error | null;
};

export type ExchangersActions = {
  setExchangers: (data: ExchangersResponse | undefined) => void;
  setOrderData: (orderData: OrderData | undefined) => void;
  setOrderBarOpen: (isOpen: boolean) => void;
  setExchangerMode: (mode: "buy" | "sell") => void;
  setAmount: (amount: number | "") => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
};

export type ExchangersStore = ExchangersState & ExchangersActions;

export const defaultInitState: ExchangersState = {
  data: undefined,
  orderData: undefined,
  isOrderBarOpen: false,
  exchangerMode: "buy",
  amount: "",
  isLoading: false,
  error: null,
};

export const createExchangersStore = (
  initState: ExchangersState = defaultInitState
) => {
  return createStore<ExchangersStore>()((set) => ({
    ...initState,
    setExchangers: (data) => set({ data }),
    setOrderData: (orderData) => set({ orderData }),
    setOrderBarOpen: (isOrderBarOpen) => set({ isOrderBarOpen }),
    setExchangerMode: (exchangerMode) => set({ exchangerMode }),
    setAmount: (amount) => set({ amount }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
  }));
};
