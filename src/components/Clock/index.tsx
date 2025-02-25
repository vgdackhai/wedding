"use client";

import { useCounterToWedding } from "@/hooks/useCounterToWedding";
import styles from "./index.module.css";

export const Clock = () => {
  const timeLeft = useCounterToWedding();

  return (
    <div className={styles["clock-wrapper"]}>
      <div className={styles["clock-item"]}>
        <span>{timeLeft.days}</span>
        <span>Ngày</span>
      </div>
      <div className={styles["clock-item"]}>
        <span>{timeLeft.hours}</span>
        <span>Giờ</span>
      </div>
      <div className={styles["clock-item"]}>
        <span>{timeLeft.minutes}</span>
        <span>Phút</span>
      </div>
      <div className={styles["clock-item"]}>
        <span>{timeLeft.seconds}</span>
        <span>Giây</span>
      </div>
    </div>
  );
};
