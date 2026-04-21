"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GtagMainConversion() {
  useEffect(() => {
    const fire = () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17996576930/7zz9CMSzt50cEKLxt4VD",
        });
      } else {
        setTimeout(fire, 300);
      }
    };
    fire();
  }, []);

  return null;
}
