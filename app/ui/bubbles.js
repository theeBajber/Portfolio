export function LeftBubble({ className, children }) {
  return (
    <div
      className={`w-full flex justify-baseline items-center h-fit ${className} pl-2 text-sm mb-3`}
    >
      <div className="w-4/5 bg-blue-700 text-white rounded-r-lg rounded-bl-lg h-fit p-1">
        {children}
      </div>
    </div>
  );
}
export function RightBubble({ className, children }) {
  return (
    <div
      className={`w-full flex justify-end items-center h-fit ${className} pr-2 mb-3`}
    >
      <div className="w-3/5 bg-white text-sm text-blue-700 rounded-l-lg rounded-br-lg h-fit p-1">
        {children}
      </div>
    </div>
  );
}
