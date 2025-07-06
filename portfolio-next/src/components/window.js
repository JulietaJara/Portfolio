"use client";

import { useState, useRef, useEffect } from "react";
import { X, Minus, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Window({ title, children, isActive, zIndex, onClose, onMinimize, onActivate }) {
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  const handleMouseDown = (e) => {
    onActivate();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dragRef.current) return;

    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;

    setPosition({
      x: dragRef.current.startPosX + deltaX,
      y: dragRef.current.startPosY + deltaY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className={`absolute bg-white rounded-lg shadow-2xl border-2 ${
        isActive ? "border-purple-400" : "border-purple-200"
      } overflow-hidden`}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        width: "600px",
        height: "500px",
      }}
      onClick={onActivate}
    >
      <div
        className={`h-8 ${
          isActive ? "bg-gradient-to-r from-purple-500 to-purple-600" : "bg-gray-300"
        } flex items-center justify-between px-3 cursor-move select-none`}
        onMouseDown={handleMouseDown}
      >
        <span className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-600"}`}>
          {title}
        </span>
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-5 w-5 p-0 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
          >
            <Minus className="h-3 w-3 text-white" />
          </Button>
          <Button size="sm" variant="ghost" className="h-5 w-5 p-0 hover:bg-white/20">
            <Square className="h-3 w-3 text-white" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-5 w-5 p-0 hover:bg-red-500"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="h-3 w-3 text-white" />
          </Button>
        </div>
      </div>

      <div className="h-[calc(100%-2rem)] overflow-auto">{children}</div>
    </div>
  );
}
