"use client";

import { useState } from "react";
import styles from "./index.module.css"; // Assuming you have a CSS module for styles

export default function Album() {
  const [_selected, setSelected] = useState("");

  console.log(_selected);

  // Add all your image URLs here
  const files = [
    "/albums/album_1.jpg",
    "/albums/album_2.jpg",
    "/albums/album_3.jpg",
    "/albums/album_4.jpg",
    "/albums/album_5.jpg",
    "/albums/album_6.jpg",
    "/albums/album_7.jpg",
    "/albums/album_8.jpg",
    "/albums/album_9.jpg",
    "/albums/album_10.jpg",
    "/albums/album_11.jpg",
    "/albums/album_12.jpg",
    "/albums/album_13.jpg",
    "/albums/album_14.jpg",
    "/albums/album_15.jpg",
    "/albums/album_16.jpg",
    "/albums/album_17.jpg",
    "/albums/album_18.jpg",
    "/albums/album_19.jpg",
    "/albums/album_20.jpg",
    "/albums/album_21.jpg",
    "/albums/album_22.jpg",
    "/albums/album_23.jpg",
    "/albums/album_24.jpg",
    "/albums/album_25.jpg",
    // "/albums/album_26.jpg",
    // "/albums/album_27.jpg",
    // "/albums/album_28.jpg",
    // "/albums/album_29.jpg",
    // "/albums/album_30.jpg",
    // "/albums/album_31.jpg",
    // "/albums/album_32.jpg",
    // "/albums/album_33.jpg",
    // "/albums/album_34.jpg",
    // "/albums/album_35.jpg",
    // "/albums/album_36.jpg",
    // "/albums/album_37.jpg",
    // "/albums/album_38.jpg",
    // "/albums/album_39.jpg",
    // "/albums/album_40.jpg",
    // "/albums/album_41.jpg",
    // "/albums/album_42.jpg",
    // "/albums/album_43.jpg",
    // "/albums/album_44.jpg",
    // "/albums/album_45.jpg",
    // "/albums/album_46.jpg",
    // "/albums/album_47.jpg",
    // "/albums/album_48.jpg",
    // "/albums/album_49.jpg",
    // "/albums/album_50.jpg",
    // "/albums/album_51.jpg",
  ];

  return (
    <div className={styles.masonry}>
      {files.map((file) => (
        <div
          key={file}
          className={`${styles["masonry-item"]} group relative overflow-hidden rounded-lg shadow-lg`}
        >
          <img
            src={file}
            alt={file}
            className="w-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
            onClick={() => setSelected(file)}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
