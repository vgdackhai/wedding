import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  images: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  transform?: (url: string) => string;
}

export const ImageViewer = ({
  images,
  selected,
  setSelected,
  transform,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    document
      .getElementById(`thumbnail_${currentIndex}`)
      ?.scrollIntoView({ inline: "center", behavior: "smooth" });
  }, [currentIndex]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextImage();
    }
    if (e.key === "ArrowLeft") {
      prevImage();
    }
    if (e.key === "Escape") {
      setSelected("");
    }
  };

  useEffect(() => {
    if (selected) {
      setCurrentIndex(images.indexOf(selected));
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return selected ? (
    <div className={styles["image-viewer-wrapper"]}>
      <div className={styles["image-viewer"]}>
        <button onClick={prevImage} className={styles["nav-button"]}>
          ❮
        </button>
        <img
          src={
            transform ? transform(images[currentIndex]) : images[currentIndex]
          }
          alt={`Image ${currentIndex + 1}`}
          className={styles["image"]}
        />
        <button
          onClick={() => setSelected("")}
          className="absolute top-2 right-2"
        >
          <XMarkIcon className="w-6 hover:text-white font-bold" />
        </button>
        <button onClick={nextImage} className={styles["nav-button"]}>
          ❯
        </button>
      </div>
      <div
        className={`flex gap-2 mt-2 overflow-x-scroll ${styles["thumbnail-wrapper"]}`}
        ref={thumbnailRef}
      >
        {images.map((image, index) => (
          <img
            id={`thumbnail_${index}`}
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`${styles["thumbnail"]} ${
              index === currentIndex ? "ring-white" : "ring-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  ) : null;
};
