"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";

export function AOSInit() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Dynamic import AOS
    void import("aos")
      .then((AOS) => {
        AOS.default.init({
          duration: isMobile ? 400 : 800, // Shorter duration on mobile
          once: true, // Only animate once
          disable: "mobile", // Disable on mobile if performance is still an issue
          startEvent: "DOMContentLoaded",
          offset: isMobile ? 20 : 100, // Smaller offset on mobile
          delay: isMobile ? 0 : 100, // No delay on mobile
          mirror: false, // Don't mirror animations
        });
      })
      .catch((error) => {
        console.error("Failed to initialize AOS:", error);
      });
  }, []);

  return null;
}
