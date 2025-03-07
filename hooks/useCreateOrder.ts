import { useMutation } from "@tanstack/react-query";

import { createOrder } from "@/utils/api";
import { useExchangersStore } from "@/providers";

export function useCreateOrder() {
  const setIsOpen = useExchangersStore((store) => store.setOrderBarOpen);

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      setIsOpen(false);
    },
  });
}
