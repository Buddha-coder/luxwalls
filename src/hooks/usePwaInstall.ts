"use client";

import { useEffect, useState } from "react";

export function usePwaInstall() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);

      const dismissed = localStorage.getItem("luxwalls_install_dismissed");
      if (!dismissed) {
        setTimeout(() => setVisible(true), 12000);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    await promptEvent.userChoice;
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem("luxwalls_install_dismissed", "true");
    setVisible(false);
  };

  return { visible, install, dismiss };
}
