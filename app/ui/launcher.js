"use client";
import { useState } from "react";
import { Search, Settings, Clock, Calendar, Music, X } from "lucide-react";
import { useRouter } from "next/navigation";

export const Launcher = ({ onLaunchApp, onClose, className }) => {
  const router = useRouter();
  const apps = [
    {
      name: "Calculator",
      icon: "/icons/Calculator.png",
      color: "text-sky-400",
    },
    { name: "Ayra", icon: "/icons/messages.png", color: "text-green-400" },
    { name: "Files", icon: "/icons/Folder1.png", color: "text-yellow-400" },
    { name: "Contact", icon: "/icons/Contacts.png", color: "text-purple-400" },
    { name: "Todo", icon: "/icons/Notes.png", color: "text-pink-400" },
    {
      name: "Terminal",
      icon: "/icons/Terminal.png",
      color: "text-neutral-400",
    },
    { name: "Shoofly", icon: "/icons/Safari.png", color: "text-cyan-400" },
    { name: "Pics", icon: "/icons/Pics.png", color: "text-orange-400" },
    {
      name: "Settings",
      icon: Settings,
      color: "text-slate-400",
      isRoute: true,
      route: "/login",
    },
    { name: "Clock", icon: Clock, color: "text-indigo-400" },
    { name: "Calendar", icon: Calendar, color: "text-red-400" },
    { name: "Player", icon: Music, color: "text-emerald-400" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAppClick = (appName) => {
    const app = apps.find(
      (a) => a.name.toLowerCase() === appName.toLowerCase(),
    );
    if (app?.isRoute && app?.route) {
      router.push(app?.route);
      onClose?.();
      return;
    }
    onLaunchApp(appName.toLowerCase());
    onClose?.();
  };

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center ${className}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 h-10 w-10 p-0 text-white hover:bg-white/20 rounded-xl flex items-center justify-center"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="w-full max-w-4xl mx-auto px-8">
        {/* Search bar */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 h-12 bg-white/10 border border-white/20 text-white placeholder:text-white/70 text-lg backdrop-blur-sm rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition"
            />
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-6 gap-8 justify-items-center max-w-3xl mx-auto">
          {filteredApps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => handleAppClick(app.name)}
            >
              <div
                className={`rounded-2xl bg-white/10 border border-white/20 shadow-md group-hover:bg-white/20 group-hover:scale-110 transition-all duration-200 w-15 h-15 flex items-center justify-center ${app.color}`}
              >
                {typeof app.icon === "string" ? (
                  <img src={app.icon} alt={app.name} className="h-10 w-10" />
                ) : (
                  <app.icon className="h-8 w-8" />
                )}
              </div>
              <span className="text-white text-sm font-medium group-hover:text-white/80 transition-colors">
                {app.name}
              </span>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredApps.length === 0 && searchTerm && (
          <div className="text-center text-white/70 mt-12">
            <div className="text-lg">No applications found</div>
            <div className="text-sm">Try searching for something else</div>
          </div>
        )}
      </div>
    </div>
  );
};
