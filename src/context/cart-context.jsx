import { createContext, useContext, useEffect, useMemo, useState,                } from "react";

const Ctx = createContext                (null);
const KEY = "ff-cart";

export function CartProvider({ children }                         ) {
  const [lines, setLines] = useState            ([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const value = useMemo         (() => {
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.price, 0),
      add: (item) =>
        setLines((prev) => {
          const found = prev.find((l) => l.name === item.name);
          if (found) return prev.map((l) => (l.name === item.name ? { ...l, qty: l.qty + 1 } : l));
          return [...prev, { ...item, qty: 1 }];
        }),
      remove: (name) => setLines((prev) => prev.filter((l) => l.name !== name)),
      setQty: (name, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.name !== name)
            : prev.map((l) => (l.name === name ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
      open,
      setOpen,
    };
  }, [lines, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
