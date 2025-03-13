import { useExchangersStore } from "@/providers";
import styels from "./index.module.css";

export default function OrderToast() {
  const isToastOpen = useExchangersStore((store) => store.isOrderToastOpen);
  const data = useExchangersStore((store) => store.orderResponse);

  if (!isToastOpen) return null;

  return <div className={styels.toast}>{JSON.stringify(data)}</div>;
}
