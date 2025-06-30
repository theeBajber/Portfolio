export default function Header({ onClose, className }) {
  return (
    <>
      <div
        className={`${className} flex justify-end items-center h-6 px-2 mb-1 w-full drag-handle`}
      >
        <button className="w-3 h-3 bg-green-600 rounded-full leading-3 text-transparent mr-1.5">
          -
        </button>
        <button className="w-3 h-3 bg-amber-300 rounded-full leading-3 text-transparent mr-1.5">
          +
        </button>
        <button
          className="w-3 h-3 bg-red-600 rounded-full leading-3 text-transparent"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </>
  );
}
