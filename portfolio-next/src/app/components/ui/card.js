import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-gray-800 border border-gray-700 rounded-md shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
