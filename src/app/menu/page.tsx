"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { menuSections, layout, type MenuItem } from "@/data/menu";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-accent-brass/25 text-text-primary rounded-sm px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function PriceDisplay({
  price,
}: {
  price: MenuItem["price"];
}) {
  const isDim = (v: string | undefined) => v === "—";

  const parts: { text: string; dim: boolean }[] = [];
  if (price.value) parts.push({ text: price.value, dim: false });
  if (price.small) parts.push({ text: `Sm ${price.small}`, dim: false });
  if (price.large) parts.push({ text: isDim(price.large) ? "—" : `Lg ${price.large}`, dim: isDim(price.large) });
  if (price.glass) parts.push({ text: `G ${price.glass}`, dim: false });
  if (price.bottle) parts.push({ text: isDim(price.bottle) ? "—" : `B ${price.bottle}`, dim: isDim(price.bottle) });

  if (price.bottle && !price.glass && !isDim(price.bottle)) {
    return (
      <span className="text-text-primary font-medium text-sm md:text-base whitespace-nowrap tabular-nums leading-none">
        Bottle {price.bottle}
      </span>
    );
  }

  return (
    <span className="text-text-primary font-medium text-sm md:text-base whitespace-nowrap tabular-nums leading-none">
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <span className="text-text-muted/20 mx-0.5">/</span>}
          <span className={p.dim ? "text-text-muted/30" : ""}>{p.text}</span>
        </span>
      ))}
    </span>
  );
}

function MenuItemRow({
  item,
  searchQuery,
}: {
  item: MenuItem;
  searchQuery: string;
}) {
  return (
    <div className="py-2.5 border-b border-black/10 last:border-0">
      <div className="flex items-baseline gap-1">
        <span className="text-text-primary text-sm md:text-base leading-snug min-w-0">
          {highlight(item.name, searchQuery)}
          {item.dietary?.map((tag) => (
            <span
              key={tag}
              className="ml-1.5 text-[9px] font-semibold px-1 py-0.5 rounded leading-none bg-stone/15 text-text-muted align-text-top"
            >
              {tag}
            </span>
          ))}
        </span>
        <span className="flex-1 min-w-[2ch] self-center border-b border-dotted border-black/15 h-0" />
        <span className="text-right">
          <PriceDisplay price={item.price} />
        </span>
      </div>
      {item.description && (
        <p className="text-text-primary/85 text-sm mt-1 leading-relaxed">
          {highlight(item.description, searchQuery)}
        </p>
      )}
      {item.addons && (
        <p className="text-text-primary/65 text-xs mt-0.5 italic">
          {item.addons}
        </p>
      )}
    </div>
  );
}

function MenuSectionBlock({
  section,
  searchQuery,
}: {
  section: (typeof menuSections)[number];
  searchQuery: string;
}) {
  const hasVisibleItems = section.items.some((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  });

  return (
    <div
      id={section.id}
      style={{ display: hasVisibleItems ? undefined : "none" }}
      className="mb-12"
    >
      {section.variant === "subsection" ? (
        <h4 className="font-heading text-sm uppercase tracking-[0.06em] text-text-primary font-bold underline underline-offset-4 decoration-1 decoration-text-primary/20 mb-1">
          {section.title}
        </h4>
      ) : (
        <h3 className="font-heading text-lg md:text-xl uppercase tracking-[0.06em] text-text-primary font-bold underline underline-offset-4 decoration-1 decoration-text-primary/40 mb-1">
          {section.title}
        </h3>
      )}
      {section.subtitle && (
        <p className="text-text-primary/60 text-sm mb-3 -mt-1">{section.subtitle}</p>
      )}
      <div>
        {section.items.map((item) => {
          const match =
            !searchQuery.trim() ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description &&
              item.description.toLowerCase().includes(searchQuery.toLowerCase()));
          return (
            <div
              key={item.name}
              style={{ display: match ? undefined : "none" }}
            >
              <MenuItemRow item={item} searchQuery={searchQuery} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Column({
  sectionIds,
  searchQuery,
  className,
}: {
  sectionIds: readonly string[];
  searchQuery: string;
  className?: string;
}) {
  const sections = sectionIds
    .map((id) => menuSections.find((s) => s.id === id))
    .filter(Boolean) as (typeof menuSections)[number][];

  return (
    <div className={"min-w-0 overflow-hidden " + (className ?? "")}>
      {sections.map((section) => (
        <MenuSectionBlock
          key={section.id}
          section={section}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}

export default function Menu() {
  const [query, setQuery] = useState("");

  const matchingItems = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    const set = new Set<string>();
    menuSections.forEach((section) =>
      section.items.forEach((item) => {
        if (
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
        ) {
          set.add(item.name);
        }
      })
    );
    return set;
  }, [query]);

  const hasResults = !matchingItems || matchingItems.size > 0;

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (el) (window as any).__lenis?.scrollTo(el, { offset: -100 });
  }, []);

  useEffect(() => {
    if (!query.trim()) return;
    const timer = setTimeout(() => {
      const firstVisible = menuSections
        .map((s) => document.getElementById(s.id))
        .find((el) => el && el.style.display !== "none");
      if (firstVisible) {
        scrollTo(firstVisible.id);
      } else if (!hasResults) {
        document
          .getElementById("menu-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [query, hasResults, scrollTo]);

  return (
    <>
      <section className="pt-44 pb-12 bg-bg-warm">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: easeOut },
                },
              }}
              custom={0}
              className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4"
            >
              Our Menu
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.15, ease: easeOut },
                },
              }}
              custom={1}
              className="font-heading text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.04em] font-medium text-text-primary"
            >
              Breakfast, lunch
              <br />
              <span className="italic font-light">& drinks</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section id="menu-section" className="pb-32 md:pb-48 bg-bg-warm">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <div className="mb-12 max-w-md">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search menu items..."
                className="w-full pl-11 pr-4 py-3 bg-white/70 border border-black/10 text-text-primary placeholder:text-stone/40 text-sm focus:outline-none focus:border-accent-brass transition-colors"
              />
            </div>
          </div>

          {!hasResults && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-text-muted text-center py-20"
            >
              No menu items found for &ldquo;{query}&rdquo;
            </motion.p>
          )}

          <div
            style={{ display: hasResults ? undefined : "none" }}
            className="flex gap-3 flex-wrap mb-12"
          >
            <button onClick={() => scrollTo("coffee")}
              className="px-6 py-2.5 text-sm font-medium tracking-[0.02em] rounded-full bg-olive-primary text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500">
              Drinks
            </button>
            <button onClick={() => scrollTo("breakfast")}
              className="px-6 py-2.5 text-sm font-medium tracking-[0.02em] rounded-full bg-olive-primary text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500">
              Foods
            </button>
          </div>

          <div
            style={{ display: hasResults ? undefined : "none" }}
            className="space-y-16"
          >
            {/* Top: Two-column grid — drinks left, wines right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-x-16 gap-y-4">
              <Column
                sectionIds={layout.topLeft}
                searchQuery={query}
              />
              <Column
                sectionIds={layout.topRight}
                searchQuery={query}
                className="md:border-l border-black/10 md:pl-16"
              />
            </div>

            {/* Bottom: Two-column grid — breakfast left, lunch right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 border-t border-black/10 pt-16">
              <Column
                sectionIds={layout.bottomLeft}
                searchQuery={query}
              />
              <Column
                sectionIds={layout.bottomRight}
                searchQuery={query}
                className="md:border-l border-black/10 md:pl-16"
              />
            </div>

            {/* Extras — full width */}
            <div className="border-t border-black/10 pt-10">
              <Column
                sectionIds={layout.fullWidth}
                searchQuery={query}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32"
        style={{
          background: "linear-gradient(180deg, #EFE6D8 0%, #E8DCCB 100%)",
        }}
      >
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.div className="max-w-2xl">
            <p className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
              Dietary
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-6">
              We cater to
              <br />
              <span className="italic font-light">all needs</span>
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-[1.8] tracking-[-0.01em]">
              Gluten Free Option (GFO) and Vegan Option (VO) are marked across
              our menu. All food is prepared in a kitchen where gluten and other
              known allergens may be present. We take caution to prevent
              cross-contamination, however any product may contain traces.
            </p>
            <p className="text-text-muted/60 text-xs mt-4">
              15% Public Holiday Surcharge applies. Please order & pay at register. No split bills.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
