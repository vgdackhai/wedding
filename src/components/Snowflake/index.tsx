'use client'

import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export const Snowflake = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const snowContainer = divRef.current;
    const numberOfSnowflakes = 50;

    // Function to create snowflakes
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.classList.add(styles["snowflake"]);
      snowflake.innerHTML = "♥";
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      // snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random fall speed
      // snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size

      // Append snowflake to the container
      snowContainer?.appendChild(snowflake);

      // Remove the snowflake after animation ends
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
      });
    };

    // Create snowflakes on page load
    for (let i = 0; i < numberOfSnowflakes; i++) {
      setTimeout(createSnowflake, i * 300); // Stagger creation of snowflakes
    }
  }, [divRef]);

  return (
    <div
      ref={divRef}
      id="snow-container"
      className={styles["snow-container"]}
    ></div>
  );
};
