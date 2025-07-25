import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import Header from "./header";
import { LeftBubble, RightBubble } from "./bubbles";

export default function Ayra({ className, onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/ayra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ayra", text: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ayra", text: "⚠️ Ayra had trouble replying." },
      ]);
    }
  };

  // Show welcome message on mount
  useEffect(() => {
    setMessages([
      {
        role: "ayra",
        text: "Hey! I'm Ayra 👋 Ask me anything about Faraj or his work.",
      },
    ]);
  }, []);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className={`h-100 w-70 bg-white/20 backdrop-blur-2xl rounded-lg flex flex-col items-center ${className}`}
    >
      <img
        src="/icons/messages.png"
        className="h-5 absolute top-1 left-2 pointer-events-none"
      />
      <Header onClose={onClose} />

      <div
        ref={scrollRef}
        className="w-full h-[calc(100%-4rem)] py-3 overflow-y-auto"
      >
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <RightBubble key={i}>{msg.text}</RightBubble>
          ) : (
            <LeftBubble key={i}>{msg.text}</LeftBubble>
          ),
        )}
      </div>

      {/* Input area */}
      <div className="w-9/10 h-7 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-[85%] h-full bg-white/30 rounded-l-lg outline-none text-sm px-1"
          placeholder="Ask me about Faraj..."
        />
        <button
          onClick={handleSend}
          className="rounded-r-lg h-full w-[15%] bg-blue-700 text-white flex items-center justify-center"
        >
          <Send className="h-4" />
        </button>
      </div>
    </div>
  );
}
