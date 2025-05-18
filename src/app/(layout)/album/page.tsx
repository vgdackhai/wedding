"use client";

import { useState } from "react";
import { ImageViewer } from "./ImageViewer";

export default function Album() {
  const [selected, setSelected] = useState("");

  const files = ["/home.jpg"];

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 h-full">
      {files.map((file) => (
        <div key={file} className="relative w-full h-auto">
          <img
            src={file}
            alt={file}
            onClick={() => setSelected(file)}
            className="cursor-pointer"
          />
        </div>
      ))}
      <ImageViewer
        imageUrls={files}
        selectedImageUrls={selected}
        setSelectedImageUrls={setSelected}
      />
    </div>
  );
}
