"use client";

import { useEffect, useState } from "react";

export function usePwaInstall() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  const track = (key: string) => {
    try {
      const count = Number(localStorage.getItem(key) || 0);
      localStorage.setItem(key, String(count + 1));
    } catch (error) {
      console.error(`Failed to track PWA event '${key}':`, error);
    }
  };

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);

      const dismissed = localStorage.getItem("luxwalls_install_dismissed");
      if (!dismissed) {
        setTimeout(() => {
          setVisible(true);
          track("luxwalls_pwa_banner_shown");
        }, 12000);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    
    if (outcome === 'accepted') {
      track('luxwalls_pwa_install_accepted');
    } else {
      track('luxwalls_pwa_install_rejected');
    }

    setVisible(false);
  };

  const dismiss = () => {
    track("luxwalls_pwa_banner_dismissed");
    localStorage.setItem("luxwalls_install_dismissed", "true");
    setVisible(false);
  };

  return { visible, install, dismiss };
}
