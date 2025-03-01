"use client";

import { useLandbot } from "~/hooks/useLandbot";

export function LandbotProvider() {
  // Initialize Landbot
  useLandbot();

  // This component doesn't render anything
  return null;
}
