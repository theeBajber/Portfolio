import Header from "./header";

export default function TextViewer({ txt, onClose }) {
  return (
    <div className="flex flex-col w-78 h-60 bg-white/40 backdrop-blur-2xl rounded-lg">
      <img
        src="/icons/IOCN.png"
        className="h-5 absolute top-1 left-2 pointer-events-none"
      />
      <Header onClose={onClose} />
      <div
        className="h-[calc(100%-1.5rem)] w-full rounded-b-lg bg-white/80 px-1 font-mono text-sm overflow-y-scroll"
        dangerouslySetInnerHTML={{ __html: txt }}
      ></div>
    </div>
  );
}
