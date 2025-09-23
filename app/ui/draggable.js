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
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
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

      const rect = wrapper.getBoundingClientRect();
      const elemW = rect.width;
      const elemH = rect.height;
      const winW = window.innerWidth;
      const winH = window.innerHeight;

      const top = 24; // status bar height
      const left = 0;
      const right = winW - elemW;
      const bottom = winH - elemH;

      const baseX = winW / 2 - elemW / 2; // only center horizontally
      const baseY = 32; // fixed spawn at ~top-8 (32px)

      const minOffsetX = left - baseX;
      const maxOffsetX = right - baseX;
      const minOffsetY = top - baseY;
      const maxOffsetY = bottom - baseY;

      const clampedX = Math.min(Math.max(newX, minOffsetX), maxOffsetX);
      const clampedY = Math.min(Math.max(newY, minOffsetY), maxOffsetY);

      posRef.current = { x: clampedX, y: clampedY };
      wrapper.style.transform = `translate(calc(-50% + ${clampedX}px), ${clampedY}px)`;
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.userSelect = "";
    };

    wrapper.addEventListener("mousedown", onMouseDown);
    wrapper.style.transform = `translate(calc(-50% + ${posRef.current.x}px), ${posRef.current.y}px)`;

    return () => {
      wrapper.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [handleClass]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute top-8 left-1/2 ${className}`}
      style={{
        transform: `translate(calc(-50% + ${posRef.current.x}px), ${posRef.current.y}px)`,
      }}
    >
      {children}
    </div>
  );
}
