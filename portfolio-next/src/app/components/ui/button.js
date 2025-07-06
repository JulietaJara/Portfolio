import React from "react";

export function Button({ children, size = "md", variant = "solid", className = "", ...props }) {
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1.5 text-base",
    lg: "px-4 py-2 text-lg",
  };
  const variants = {
    solid: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-600 hover:bg-gray-700 bg-transparent text-gray-300",
  };

  return (
    <button
      className={`rounded ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
