"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useExchangersStore } from "@/providers";
import { BackArrow } from "@/components/ui/icons/back-arrow";
import { Location } from "../ui/icons";
import Button from "../ui/button";
import { isNowInTimeRange } from "@/utils";
import styles from "./index.module.css";

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

function Hours({
  hours,
}: {
  hours: {
    isNow: boolean;
    start: string;
    end: string;
  };
}) {
  if (hours.isNow) {
    return <div className={styles.hours}>Відчинено до {hours.end}</div>;
  }

  return (
    <div className={styles.hours}>
      <span className={styles.errorText}>Зачинено.</span> Відкриється о{" "}
      {hours.start}
    </div>
  );
}

export function OrderBar() {
  const orderData = useExchangersStore((store) => store.orderData);
  const isOpen = useExchangersStore((store) => store.isOrderBarOpen);
  const setIsOpen = useExchangersStore((store) => store.setOrderBarOpen);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  if (orderData) {
    const hours = isNowInTimeRange(orderData.hours);
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.overlay}
          onClick={handleClose}
        />
        <motion.aside
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="exit"
          variants={sidebarVariants}
          transition={{ type: "tween", duration: 0.3 }}
          className={styles.sidebar}
        >
          <button className={styles.backButton} onClick={handleClose}>
            <BackArrow />
          </button>
          <h2 className={styles.title}>Бронювання</h2>

          <form className={styles.form}>
            {/* PHONE INPUT */}
            <div className={styles.formControl}>
              <label className={styles.label} htmlFor="phone">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                className={styles.input}
                type="tel"
                placeholder="+38"
              />
            </div>

            {/* INFO */}
            <div className={styles.info}>
              <div className={styles.infoText}>
                <h4 className={styles.infoTitle}>Отримання: </h4>
                <p className={styles.infoDescription}>
                  самовивіз з обмінному відділенні
                </p>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoTitle}>Оплата: </h4>
                <p className={styles.infoDescription}>
                  безпосередньо в обмінному відділенні
                </p>
              </div>
              <div className={styles.infoText}>
                <h4 className={styles.infoTitle}>Термін броні: </h4>
                <p className={styles.infoDescription}>протягом 1 години</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className={styles.locationWrapper}>
              <div className={styles.locationInfo}>
                <div className={styles.address}>{orderData.address}</div>
                <Hours hours={hours} />
              </div>
              <Link
                className={styles.location}
                href={orderData.addressMap}
                target="_blank"
              >
                <div className={styles.iconWrapper}>
                  <Location className={styles.icon} />
                </div>
                <span className={styles.locationText}>Маршрут</span>
              </Link>
            </div>

            {/* CURRENCY */}
            <div className={styles.currency}>
              <div className={styles.currencyName}>
                {orderData.currencyName}
              </div>
              <div className={styles.currencyValue}>{orderData.amount}</div>
            </div>

            {/* CONCLUSION */}
            <div className={styles.conclusion}>
              <div className={styles.conclusionText}>
                {orderData.mode === "buy" ? "Вы отримуйте" : "Ви віддаєте"}
              </div>
              <div className={styles.conclusionValue}>
                {(
                  Number(orderData.amount) * Number(orderData.price)
                ).toLocaleString("ua-UA")}
              </div>
            </div>

            <Button disabled={!hours.isNow} type="submit">
              {hours.isNow
                ? "підтвердити бронювання"
                : `Повертайтеся з ${hours.start} до ${hours.end}`}
            </Button>
          </form>
        </motion.aside>
      </>
    );
  }
}
