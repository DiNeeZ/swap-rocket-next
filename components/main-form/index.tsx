"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { type Currency } from "@/data";
import styles from "./index.module.css";
import { getExchangers } from "@/utils";
import FormTabs from "./form-tabs";
import { useExchangersStore } from "@/providers";

export function MainForm() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [number, setNumber] = useState<number | "">("");
  const [currencyList, setCurrencyList] = useState<Currency[] | null>(null);
  const [currency, setCurrency] = useState<Currency | null>(null);
  const { setExchangers, setExchangerMode, setIsLoading, setError } =
    useExchangersStore((state) => state);

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["exchangers"],
    queryFn: () => {
      if (currency && typeof number === "number") {
        return getExchangers(Number(currency.id), number);
      }
      return Promise.resolve(null);
    },
    enabled: false,
  });

  useEffect(() => {
    const fetchCurrenncyList = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/currency/`
      );
      const { objects } = await response.json();

      setCurrencyList(objects as Currency[]);
    };

    fetchCurrenncyList();
  }, []);

  useEffect(() => {
    setExchangers(data ?? undefined);
    setExchangerMode(mode);
    setIsLoading(isLoading);
    setError(error);
  }, [
    data,
    mode,
    isLoading,
    error,
    setExchangers,
    setExchangerMode,
    setIsLoading,
    setError,
  ]);

  useEffect(() => {
    if (currencyList) setCurrency(currencyList[0]);
  }, [currencyList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setNumber("");
    } else {
      const parsedValue = parseFloat(inputValue);

      if (!isNaN(parsedValue)) {
        setNumber(parsedValue);
      }
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form className={styles.form}>
      <FormTabs mode={mode} setMode={setMode} />
      <div className={styles.wrapper}>
        <Select
          options={currencyList}
          value={currency}
          onChange={setCurrency}
        />
        <Input
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="500"
        />
        <Button onClick={handleSubmit} disabled={isLoading}>
          Знайти де обміняти
        </Button>
      </div>
    </form>
  );
}
