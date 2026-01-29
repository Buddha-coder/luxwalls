"use client";

import { useEffect, useState } from "react";

export function useIosInstallHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isIos =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !(window as any).MSStream;

    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!isIos || !isSafari) return;

    const visits = Number(localStorage.getItem("luxwalls_visits") || 0);
    const dismissed = localStorage.getItem("luxwalls_ios_install_dismissed");

    if (visits < 3 || dismissed) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0 && scrollTop / docHeight >= 0.5) {
        setTimeout(() => setVisible(true), 8000);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    localStorage.setItem("luxwalls_ios_install_dismissed", "true");
    setVisible(false);
  };

  return { visible, dismiss };
}