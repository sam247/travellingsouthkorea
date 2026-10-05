"use client";

import { useEffect } from "react";

/**
 * Google Auto ads sometimes inject <a> wrappers into heading markup.
 * Unwrap those links so headings stay plain text (QA-2026-10-05-10).
 * Does not remove ad units elsewhere.
 */
function unwrapAdAnchors(root: ParentNode = document) {
  root.querySelectorAll("h1 a, h2 a, h3 a, h4 a").forEach((node) => {
    const anchor = node as HTMLAnchorElement;
    const href = (anchor.getAttribute("href") || "").toLowerCase();
    const isAdLink =
      href.includes("googlesyndication") ||
      href.includes("doubleclick") ||
      href.includes("googleadservices") ||
      href.includes("google.com/aclk") ||
      anchor.hasAttribute("data-google-query-id") ||
      Boolean(anchor.closest(".google-auto-placed")) ||
      Boolean(anchor.closest("ins.adsbygoogle"));

    if (!isAdLink) return;

    const parent = anchor.parentNode;
    if (!parent) return;
    while (anchor.firstChild) {
      parent.insertBefore(anchor.firstChild, anchor);
    }
    parent.removeChild(anchor);
  });
}

export function StripAdLinksFromHeadings() {
  useEffect(() => {
    unwrapAdAnchors();
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList" || m.type === "attributes") {
          unwrapAdAnchors();
          break;
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "data-google-query-id"],
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
