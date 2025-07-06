"use client";

import { useState, useEffect } from "react";
import { Desktop } from "../components/desktop";
import { Taskbar } from "../components/taskbar";
import { WindowManager } from "../components/window-manager";

export default function Portfolio() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = (windowId) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setActiveWindow(windowId);
  };

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(
        openWindows.length > 1
          ? openWindows[openWindows.length - 2]
          : null
      );
    }
  };

  const minimizeWindow = (windowId) => {
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 relative cursor-custom">
      <Desktop onOpenWindow={openWindow} />
      <WindowManager
        openWindows={openWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onActivate={setActiveWindow}
      />
      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={setActiveWindow}
        time={time}
      />
    </div>
  );
}
