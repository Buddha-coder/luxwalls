"use client";

import { useEffect, useState } from "react";

// Define the interface for the BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const track = (key: string) => {
  const count = Number(localStorage.getItem(key) || 0);
  localStorage.setItem(key, String(count + 1));
};

export function usePwaInstall() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(
    null
  );
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
    const handler = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);

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

    // 🎉 Trigger micro-celebration
    localStorage.setItem("luxwalls_install_success", "true");
    localStorage.setItem("luxwalls_installed", "true");
    setVisible(false);
  };

  const dismiss = () => {
    track("luxwalls_install_dismissed");
    localStorage.setItem("luxwalls_install_dismissed", "true");
    setVisible(false);
  };

  return { visible, install, dismiss };
}
