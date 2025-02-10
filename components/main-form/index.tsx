'use client';

import React, { useState } from 'react';
import styles from './index.module.css';
import Select from '@/components/select';
import { selectData, type Currency } from '@/data';
import { Input } from '@/components/ui/input';
import Button from '../ui/button';

export function MainForm() {
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  const [number, setNumber] = useState<number | ''>('');
  const [currency, setCurrency] = useState<Currency>(selectData[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue === '') {
      setNumber('');
    } else {
      const parsedValue = parseFloat(inputValue);

      if (!isNaN(parsedValue)) {
        setNumber(parsedValue);
      }
    }
  };

  const buyBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (mode !== 'buy') {
      setMode('buy');
    }
  };

  const sellBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (mode !== 'sell') {
      setMode('sell');
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.table({
      Режим: mode === 'buy' ? 'Покупка' : 'Продажа',
      'Текущая валюта': currency.text,
    });
  };

  return (
    <form className={styles.form}>
      <nav className={styles.tabs}>
        <button
          className={styles.navBtn}
          onClick={buyBtnClick}
          disabled={mode === 'buy'}
        >
          Купить
        </button>
        <button
          className={styles.navBtn}
          onClick={sellBtnClick}
          disabled={mode === 'sell'}
        >
          Продать
        </button>
      </nav>
      <div className={styles.wrapper}>
        <Select options={selectData} value={currency} onChange={setCurrency} />
        <Input
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="500"
        />
        <Button onClick={handleSubmit}>Знайти де обміняти</Button>
      </div>
    </form>
  );
}
