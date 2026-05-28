"use client";

import { useState, useEffect, useLayoutEffect, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useLayoutEffect(() => {
    startTransition(() => {
      setScrolled(false);
      setMobileOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) mobileOpen ? lenis.stop() : lenis.start();
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-bg-primary/70 backdrop-blur-[16px] border-b border-white/25"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4 mx-auto" style={{ maxWidth: "1400px" }}>
        <div className="w-8" />

        <nav className={`hidden md:flex items-center gap-10 transition-opacity duration-500 ${isHome && !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium tracking-[0.02em] transition-colors duration-300 ${
                pathname === item.href
                  ? "text-accent-brass"
                  : "text-text-primary/80 hover:text-text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 text-base font-medium tracking-[0.02em] rounded-full transition-all duration-500 bg-olive-primary text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)]"
          >
            Reservations
          </Link>
        </nav>

        <button
          className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-bg-primary z-0 flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-3xl font-heading tracking-[0.02em] ${
                  pathname === item.href ? "text-accent-brass" : "text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full"
            >
              Reservations
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
