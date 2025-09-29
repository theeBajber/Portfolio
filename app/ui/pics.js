"use client";

import { useState } from "react";
import { Search, Grid3X3, List, Heart, Eye, X } from "lucide-react";
import Header from "./header";

const images = [
  "/photos/Faraj.jpeg",
  "/photos/Faraj4.jpeg",
  "/photos/pic8.jpeg",
  "/photos/Faraj2.jpeg",
  "/photos/pic5.jpeg",
  "/photos/Nvim.png",
  "/photos/Faraj3.jpeg",
  "/photos/Faraj5.jpeg",
  "/photos/night.jpg",
];

const viewModes = ["masonry", "grid", "list"];

export default function Pics({ onClose, className }) {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("masonry");
  const [preview, setPreview] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (img) => {
    setFavorites((prev) =>
      prev.includes(img) ? prev.filter((i) => i !== img) : [...prev, img],
    );
  };

  const filtered = images.filter((img) =>
    img.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className={`flex flex-col w-full sm:w-[600px] h-[420px] bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/30 ${className}`}
    >
      {/* Header Bar */}
      <Header onClose={onClose} className={`z-23`} />
      <img
        src="/icons/Pics.png"
        className="absolute top-2 left-2 h-7 pointer-events-none"
      />

      {/* Top controls */}
      <div className="p-3 border-b border-white/10 flex items-center gap-4">
        <h2 className="text-base font-medium text-white">Gallery</h2>
        <div className="ml-auto flex gap-1">
          {viewModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`p-2 rounded ${viewMode === mode ? "bg-white/20" : "hover:bg-white/10"}`}
              title={mode}
            >
              {mode === "grid" || mode === "masonry" ? (
                <Grid3X3 className="w-4 h-4 text-white" />
              ) : (
                <List className="w-4 h-4 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-white/10 relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white/10 rounded border border-white/20 text-white placeholder:text-white/50 outline-none"
          placeholder="Search photos..."
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-3">
        {viewMode === "list" ? (
          <div className="space-y-4">
            {filtered.map((img) => (
              <div key={img} className="flex items-center gap-4">
                <img
                  src={img}
                  alt=""
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                  onClick={() => setPreview(img)}
                />
                <div className="flex-1 truncate text-white">
                  {img.split("/").pop()}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toggleFavorite(img)}>
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(img) ? "text-red-500 fill-red-500" : "text-white"}`}
                    />
                  </button>
                  <button onClick={() => setPreview(img)}>
                    <Eye className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === "masonry" ? (
          <div className="columns-2 sm:columns-2 gap-3 [column-fill:balance]">
            {filtered.map((img) => (
              <div
                key={img}
                className="break-inside-avoid mb-3 group relative cursor-pointer"
                onClick={() => setPreview(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover rounded transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute top-2 right-2 z-10">
                  <button
                    className="bg-black/50 p-1 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(img);
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(img) ? "text-red-500 fill-red-500" : "text-white"}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {filtered.map((img) => (
              <div
                key={img}
                className="group relative cursor-pointer"
                onClick={() => setPreview(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-48 object-cover rounded transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute top-2 right-2 z-10">
                  <button
                    className="bg-black/50 p-1 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(img);
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(img) ? "text-red-500 fill-red-500" : "text-white"}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Preview */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 w-[calc(100% - 1.5rem)] flex items-center justify-center z-20"
          onClick={() => setPreview(null)}
        >
          <div className="relative w-full h-full p-6 flex items-center justify-center">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={() => setPreview(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
