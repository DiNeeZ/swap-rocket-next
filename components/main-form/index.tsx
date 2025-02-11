"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { selectData, type Currency } from "@/data";
import styles from "./index.module.css";
import { getPosts } from "@/utils";
import FormTabs from "./form-tabs";
import { useExchangersStore } from "@/providers";

export function MainForm() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [number, setNumber] = useState<number | "">("");
  const [currency, setCurrency] = useState<Currency>(selectData[0]);
  const { setExchangers, setIsLoading, setError } = useExchangersStore(
    (state) => state
  );

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    enabled: false,
  });

  useEffect(() => {
    setExchangers(data);
    setIsLoading(isLoading);
    setError(error);
  }, [data, isLoading, error, setExchangers, setIsLoading, setError]);

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
        <Select options={selectData} value={currency} onChange={setCurrency} />
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
