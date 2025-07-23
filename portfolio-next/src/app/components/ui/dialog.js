"use client";

import React from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Dialog({ open, onOpenChange, children }) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => onOpenChange(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function DialogContent({ children, className = "" }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className={`rounded-lg shadow-lg w-full max-w-2xl p-6 ${className} bg-white dark:bg-gray-900`}
    >
      {children}
    </motion.div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">{children}</h2>;
}
