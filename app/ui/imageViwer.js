import Header from "./header";

export default function ImageViewer({ src, onClose }) {
  return (
    <div className="flex flex-col w-78 bg-white/40 backdrop-blur-2xl rounded-lg">
      <img
        src="/icons/Pics.png"
        className="h-5 absolute top-1 left-2 pointer-events-none"
      />
      <Header onClose={onClose} />
      <img src={src} className="rounded-b-lg" />
    </div>
  );
}
