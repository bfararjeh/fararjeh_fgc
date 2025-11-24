"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MailLinkProps {
  email: string;
  children: ReactNode;
}

const MailLink: React.FC<MailLinkProps> = ({ email, children }) => {
  const [showFallback, setShowFallback] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowFallback(false);
      }
    }

    if (showFallback) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFallback]);

  return (
    <div ref={ref} className="flex-col flex">
      <a
        className="text-left cursor-pointer"
        id="sidebar"
        onClick={() => setShowFallback(true)}
      >
        {children}
      </a>

      <AnimatePresence>
        {showFallback && (
          <motion.button
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              navigator.clipboard.writeText(email);
              setShowFallback(false);
            }}
            className="absolute mt-10 text-xs bg-site-bg-dim text-white font-centgoth py-2 px-4 rounded-xl hover:bg-neutral-800 border-white border-1 text-center cursor-pointer"
          >
            {email}
            <br/>
            (click to copy)
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MailLink;