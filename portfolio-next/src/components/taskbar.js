"use client";

import { Button } from "@/components/ui/button";
import { Folder, FileText, User, Mail, Trash2 } from "lucide-react";

export function Taskbar({ openWindows, activeWindow, onWindowClick, time }) {
  const getWindowIcon = (windowId) => {
    switch (windowId) {
      case "projects":
        return Folder;
      case "about":
        return FileText;
      case "experience":
        return User;
      case "contact":
        return Mail;
      case "trash":
        return Trash2;
      default:
        return FileText;
    }
  };

  const getWindowName = (windowId) => {
    switch (windowId) {
      case "projects":
        return "Proyectos";
      case "about":
        return "Sobre Mí";
      case "experience":
        return "Experiencia";
      case "contact":
        return "Contacto";
      case "trash":
        return "Papelera";
      default:
        return "Ventana";
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-purple-600 to-purple-700 border-t-2 border-purple-500 flex items-center px-2 shadow-lg">
      {/* Start Button */}
      <Button variant="ghost" className="h-8 px-4 text-white hover:bg-white/20 font-medium">
        ✨ Inicio
      </Button>

      {/* Window Buttons */}
      <div className="flex gap-1 ml-2">
        {openWindows.map((windowId) => {
          const Icon = getWindowIcon(windowId);
          return (
            <Button
              key={windowId}
              variant="ghost"
              className={`h-8 px-3 text-white hover:bg-white/20 flex items-center gap-2 ${
                activeWindow === windowId ? "bg-white/30" : ""
              }`}
              onClick={() => onWindowClick(windowId)}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{getWindowName(windowId)}</span>
            </Button>
          );
        })}
      </div>

      <div className="ml-auto text-white text-sm font-medium">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
}
