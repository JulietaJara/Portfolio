import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-gray-700 text-gray-200",
    secondary: "bg-blue-900 text-blue-200",
    outline: "border border-blue-500 text-blue-300 bg-transparent",
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}
