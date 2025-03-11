"use client";

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
      snowflake.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
`;
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
