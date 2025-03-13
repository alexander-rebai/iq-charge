"use client";

import { useEffect } from "react";

interface LandbotWindow extends Window {
  Landbot?: {
    Popup: new (config: { configUrl: string }) => {
      open: () => void;
      [key: string]: unknown;
    };
  };
}

export function useLandbot() {
  useEffect(() => {
    // Initialize Landbot on first mouse over or touch
    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    // Define the global function to open the chat
    window.openLandbotChat = function () {
      // First ensure Landbot is initialized
      initLandbot();

      // If myLandbot exists and has an open method, call it
      if (window.myLandbot?.open) {
        window.myLandbot.open();
      }
    };

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  // Function to open the Landbot chat
  const openChat = () => {
    window.openLandbotChat?.();
  };

  return { openChat };
}

function initLandbot() {
  if (typeof window === "undefined") return;

  if (!window.myLandbot) {
    const script = document.createElement("script");
    script.type = "module";
    script.async = true;
    script.addEventListener("load", function () {
      const landbotWindow = window as unknown as LandbotWindow;
      if (landbotWindow.Landbot?.Popup) {
        window.myLandbot = new landbotWindow.Landbot.Popup({
          configUrl:
            "https://storage.googleapis.com/landbot.online/v3/H-2798374-0G1QF00O8B7KZ9WO/index.json",
        });
      }
    });
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }
}
