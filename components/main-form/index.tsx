"use client";

import { useEffect, useState } from "react";

import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import type { Currency } from "@/types";
import styles from "./index.module.css";
import FormTabs from "./form-tabs";
import { useExchangersStore } from "@/providers";
import { useExchangers } from "@/hooks/useExchangers";

export function MainForm({ currencyList }: { currencyList: Currency[] }) {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [number, setNumber] = useState<number | "">("");
  const [currency, setCurrency] = useState<Currency | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const { setExchangers, setExchangerMode, setAmount, setIsLoading, setError } =
    useExchangersStore((state) => state);

  const { data, refetch, isLoading, isFetching, error } = useExchangers(
    currency,
    number
  );

  useEffect(() => {
    setExchangers(data ?? undefined);
    setExchangerMode(mode);
    setAmount(typeof number === "number" ? number : "");
    setIsLoading(isLoading || isFetching);
    setError(error);
  }, [
    data,
    mode,
    number,
    isLoading,
    isFetching,
    error,
    setExchangers,
    setExchangerMode,
    setAmount,
    setIsLoading,
    setError,
  ]);

  useEffect(() => {
    if (currencyList) setCurrency(currencyList[0]);
  }, [currencyList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    // Разрешаем только цифры и точку (без минуса)
    inputValue = inputValue.replace(/[^0-9.]/g, "");

    // Предотвращаем ввод нескольких точек подряд
    if ((inputValue.match(/\./g) || []).length > 1) {
      inputValue = inputValue.slice(0, -1);
    }

    if (inputValue === "") {
      setNumber("");
    } else {
      const parsedValue = parseFloat(inputValue);
      if (!isNaN(parsedValue)) {
        setNumber(parsedValue);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch();
  };

  return (
    <form
      className={`${styles.form}${
        isSelectOpen ? ` ${styles.selectorOpen}` : ""
      }`}
      onSubmit={handleSubmit}
    >
      <FormTabs mode={mode} setMode={setMode} />
      <div className={styles.wrapper}>
        <Select
          options={currencyList}
          value={currency}
          onChange={setCurrency}
          isSelectOpen={isSelectOpen}
          setIsSelectOpen={setIsSelectOpen}
        />
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={number}
          onChange={handleChange}
          placeholder="Введіть суму"
        />
        <Button disabled={isLoading}>Знайти де обміняти</Button>
      </div>
    </form>
  );
}
