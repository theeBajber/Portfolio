import { useEffect, useRef } from "react";

export default function Draggable({
  children,
  handleClass = ".drag-handle",
  className = "",
}) {
  const wrapperRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let startX, startY;
    const onMouseDown = (e) => {
      if (handleClass && !e.target.closest(handleClass)) return;
      if (
        e.target.tagName == "INPUT" ||
        e.target.tagName == "TEXTAREA" ||
        e.target.isContentEditable
      )
        return;
      isDraggingRef.current = true;
      startX = e.clientX - posRef.current.x;
      startY = e.clientY - posRef.current.y;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.userSelect = "none";
    };
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      posRef.current = { x: newX, y: newY };
      wrapper.style.transform = `translate(${newX}px, ${newY}px)`;
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.userSelect = "";
    };
    wrapper.addEventListener("mousedown", onMouseDown);
    return () => {
      wrapper.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div
      ref={wrapperRef}
      className={`absolute top-10 right-[40%] ${className}`}
      style={{
        transform: `translate(${posRef.current.x}, ${posRef.current.y})`,
      }}
    >
      {children}
    </div>
  );
}
