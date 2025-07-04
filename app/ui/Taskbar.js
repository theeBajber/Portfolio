import { useEffect } from "react";

export default function Taskbar({
  className,
  onCalcClick,
  onContactClick,
  onBrowserClick,
  onTermClick,
  onTodoClick,
  onFinderClick,
  onAyraClick,
}) {
  useEffect(() => {
    const buttons = document.querySelectorAll(".taskbar > button");
    buttons.forEach((btn, i) => {
      btn.addEventListener("mouseenter", () => {
        for (let j = -2; j <= 2; j++) {
          const index = i + j;
          if (index < 0 || index >= buttons.length) continue;
          const dist = Math.abs(j);
          const scale = [1.25, 1.18, 1.05][dist] || 1;
          const offset = [-14, -8, -4][dist] || 0;
          buttons[index].style.transform =
            `translateY(${offset}px) scaleY(${scale})`;
        }
      });
      btn.addEventListener("mouseleave", () => {
        for (let j = -2; j <= 2; j++) {
          const index = i + j;
          if (index < 0 || index >= buttons.length) continue;
          buttons[index].style.transform = "translateY(0) scale(1)";
        }
      });
    });
  }, []);
  return (
    <div
      className={`backdrop-blur-2xl rounded-3xl bg-white/20 flex justify-evenly items-center px-2 ${className} min-w-87 taskbar`}
    >
      <button>
        <img src="/icons/Launchpad.png" />
      </button>
      <button onClick={onFinderClick}>
        <img src="/icons/Folder_Common.png" />
      </button>
      <button onClick={onBrowserClick}>
        <img src="/icons/Safari.png" />
      </button>
      <button onClick={onContactClick}>
        <img src="/icons/Contacts.png" />
      </button>
      <button onClick={onTermClick}>
        <img src="/icons/Terminal.png" />
      </button>
      <button onClick={onCalcClick}>
        <img src="/icons/Calculator.png" />
      </button>
      <button onClick={onTodoClick}>
        <img src="/icons/Notes.png" />
      </button>
      <button onClick={onAyraClick}>
        <img src="/icons/messages.png" />
      </button>
    </div>
  );
}
