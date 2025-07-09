// components/PhotosApp.js
import { useState } from "react";
import Header from "./header";

const images = [
  "/photos/pic1.jpeg",
  "/photos/pic2.jpeg",
  "/photos/pic3.jpeg",
  "/photos/pic7.jpeg",
  "/photos/pic5.jpeg",
  "/photos/pic8.jpeg",
  "/photos/pic9.jpeg",
  "/photos/pic10.jpeg",
];

export default function PhotosApp({ className, onClose }) {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className={`${className} w-full h-full bg-white/30 backdrop-blur-md rounded-lg overflow-hidden relative`}
    >
      <Header className="z-10 relative" onClose={onClose} />

      {/* Gallery Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-2 p-4 h-[calc(100%-1.5rem)] overflow-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Gallery item"
            className="mb-2 w-full rounded-lg cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {/* Fullscreen Preview */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
