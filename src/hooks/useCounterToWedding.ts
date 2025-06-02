import { useEffect, useState } from "react";

export const useCounterToWedding = () => {
  const targetDate = new Date("2025-06-22T00:00:00"); // Target date and time

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);

      // If the countdown has reached the target date, clear the interval
      if (newTimeLeft.total <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: Date) {
    const now = new Date();
    const total = targetDate.getTime() - now.getTime();

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return timeLeft;
};
