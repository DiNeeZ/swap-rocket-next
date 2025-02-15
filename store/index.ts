import { ExchangersResponse } from "@/types";
import { createStore } from "zustand/vanilla";

export type ExchangersState = {
  data: ExchangersResponse | undefined;
  isLoading: boolean;
  error: Error | null;
};

export type ExchangersActions = {
  setExchangers: (data: ExchangersResponse | undefined) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
};

export type ExchangersStore = ExchangersState & ExchangersActions;

export const defaultInitState: ExchangersState = {
  data: undefined,
  isLoading: false,
  error: null,
};

export const createExchangersStore = (
  initState: ExchangersState = defaultInitState
) => {
  return createStore<ExchangersStore>()((set) => ({
    ...initState,
    setExchangers: (data) => set({ data }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
  }));
};
