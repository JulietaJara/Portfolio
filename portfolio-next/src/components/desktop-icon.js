"use client";

export function DesktopIcon({ id, name, icon: Icon, position, onDoubleClick }) {
  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer group select-none"
      style={{ left: position.x, top: position.y }}
      onDoubleClick={onDoubleClick}
    >
      <div className="p-3 rounded-lg group-hover:bg-white/20 transition-colors">
        <Icon className="w-12 h-12 text-purple-800 drop-shadow-lg" />
      </div>
      <span className="text-sm text-purple-900 font-medium mt-1 text-center max-w-20 leading-tight drop-shadow-sm">
        {name}
      </span>
    </div>
  );
}
