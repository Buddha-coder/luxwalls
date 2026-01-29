"use client";

import { useEffect, useState } from "react";

const track = (key: string) => {
  const count = Number(localStorage.getItem(key) || 0);
  localStorage.setItem(key, String(count + 1));
};

export function usePwaInstall() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    // 🔹 Visit count
    const visits = Number(localStorage.getItem("luxwalls_visits") || 0);
    localStorage.setItem("luxwalls_visits", String(visits + 1));

    // ❌ Less than 3 visits → never show
    if (visits < 2) return;

    // 🔹 Scroll detection (50%)
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0 && scrollTop / docHeight >= 0.5) {
        setScrolledEnough(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    // 🔹 Install prompt handler
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);

      const dismissed = localStorage.getItem(
        "luxwalls_install_dismissed"
      );
      if (dismissed) return;

      // Delay + scroll condition
      setTimeout(() => {
        if (scrolledEnough) {
          track("luxwalls_install_shown");
          setVisible(true);
        }
      }, 12000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolledEnough]);

  const install = async () => {
    if (!promptEvent) return;
    track("luxwalls_install_accepted");
    promptEvent.prompt();
    await promptEvent.userChoice;
    setVisible(false);
  };

  const dismiss = () => {
    track("luxwalls_install_dismissed");
    localStorage.setItem("luxwalls_install_dismissed", "true");
    setVisible(false);
  };

  return { visible, install, dismiss };
}