"use client";

import { useState } from "react";
import styles from "./index.module.css"; // Assuming you have a CSS module for styles

export default function Album() {
  const [_selected, setSelected] = useState("");

  console.log(_selected);

  // Add all your image URLs here
  const files = [
    "/thumbnails/album_1.jpg",
    "/thumbnails/album_2.jpg",
    "/thumbnails/album_3.jpg",
    "/thumbnails/album_4.jpg",
    "/thumbnails/album_5.jpg",
    "/thumbnails/album_6.jpg",
    "/thumbnails/album_7.jpg",
    "/thumbnails/album_8.jpg",
    "/thumbnails/album_9.jpg",
    "/thumbnails/album_10.jpg",
    "/thumbnails/album_11.jpg",
    "/thumbnails/album_12.jpg",
    "/thumbnails/album_13.jpg",
    "/thumbnails/album_14.jpg",
    "/thumbnails/album_15.jpg",
    "/thumbnails/album_16.jpg",
    "/thumbnails/album_17.jpg",
    "/thumbnails/album_18.jpg",
    "/thumbnails/album_19.jpg",
    "/thumbnails/album_20.jpg",
    "/thumbnails/album_21.jpg",
    "/thumbnails/album_22.jpg",
    "/thumbnails/album_23.jpg",
    "/thumbnails/album_24.jpg",
    "/thumbnails/album_25.jpg",
    "/thumbnails/album_26.jpg",
    "/thumbnails/album_27.jpg",
    "/thumbnails/album_28.jpg",
    "/thumbnails/album_29.jpg",
    "/thumbnails/album_30.jpg",
    "/thumbnails/album_31.jpg",
    "/thumbnails/album_32.jpg",
    "/thumbnails/album_33.jpg",
    "/thumbnails/album_34.jpg",
    "/thumbnails/album_35.jpg",
    "/thumbnails/album_36.jpg",
    "/thumbnails/album_37.jpg",
    "/thumbnails/album_38.jpg",
    "/thumbnails/album_39.jpg",
    "/thumbnails/album_40.jpg",
    "/thumbnails/album_41.jpg",
    "/thumbnails/album_42.jpg",
    "/thumbnails/album_43.jpg",
    "/thumbnails/album_44.jpg",
    "/thumbnails/album_45.jpg",
    "/thumbnails/album_46.jpg",
    "/thumbnails/album_49.jpg",
    "/thumbnails/album_50.jpg",
    "/thumbnails/album_51.jpg",
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
