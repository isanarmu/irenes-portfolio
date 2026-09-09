"use client";

import { useTheme } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import styles from "./ThemeFloatingButton.module.scss";

export function ThemeFloatingButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      className={styles.themeButton}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}
