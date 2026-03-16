"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { MegaNav } from "./MegaNav";
import { SearchOverlay } from "./SearchOverlay";
import { getCityPath, getCategoryPath, getCulturePath, getCinemaPath } from "@/lib/canonical";

const mobileLinks = [
  { label: "Travel Guide", href: "/" },
  { label: "South Korea", href: "/south-korea" },
  { label: "Seoul", href: "/south-korea/seoul" },
  { label: "Busan", href: "/south-korea/busan" },
  { label: "Jeju", href: "/south-korea/jeju" },
  { label: "Culture", href: getCulturePath() },
  { label: "Cinema", href: getCinemaPath() },
  { label: "Food", href: "/category/food" },
  { label: "Nightlife", href: "/category/nightlife" },
  { label: "Things To Do", href: "/category/things-to-do" },
  { label: "Itineraries", href: "/category/itineraries" },
  { label: "Travel Tips", href: "/category/travel-tips" },
];

const desktopLinks = [
  { label: "Seoul", href: getCityPath("seoul") },
  { label: "Busan", href: getCityPath("busan") },
  { label: "Jeju", href: getCityPath("jeju") },
  { label: "Culture", href: getCulturePath() },
  { label: "Cinema", href: getCinemaPath() },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Travelling South Korea
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <MegaNav />
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-foreground"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden fixed inset-0 top-14 bg-background z-40 flex flex-col p-6 gap-1 animate-in fade-in slide-in-from-top-2 duration-200 overflow-y-auto">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-lg font-medium border-b border-border/50 transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
