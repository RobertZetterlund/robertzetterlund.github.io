import { useEffect } from "react";

const PREFERS_LIGHT_KEY = "(prefers-color-scheme: light)";

export const usePreferredTheme = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: (payload: {
    theme?: "light" | "dark";
    reason: "info" | "prefersLight";
  }) => void;
  theme: "light" | "dark";
}) => {
  useEffect(() => {
    const prefersLight = window.matchMedia(PREFERS_LIGHT_KEY).matches;
    setTimeout(() => {
      if (prefersLight) {
        if (theme === "dark") {
          // prefers light and is on dark, lets change
          toggleTheme({ theme: "light", reason: "prefersLight" });
        }
      } else {
        // no preference found, lets just inform that they can change.
        toggleTheme({ reason: "info" });
      }
    }, 4500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
