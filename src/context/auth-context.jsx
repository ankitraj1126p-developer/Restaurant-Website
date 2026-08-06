import { createContext, useContext, useEffect, useMemo, useState,                } from "react";

const Ctx = createContext                (null);
const KEY = "ff-user";
const ACCOUNTS = "ff-accounts";

function titleize(v        ) {
  return v
    .replace(/[._-]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function AuthProvider({ children }                         ) {
  const [user, setUser] = useState                 (null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (u                 ) => {
    setUser(u);
    try {
      if (u) localStorage.setItem(KEY, JSON.stringify(u));
      else localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo         (
    () => ({
      user,
      register: (u) => {
        try {
          const raw = localStorage.getItem(ACCOUNTS);
          const map                         = raw ? JSON.parse(raw) : {};
          map[u.email.toLowerCase()] = u.name;
          localStorage.setItem(ACCOUNTS, JSON.stringify(map));
        } catch {
          /* ignore */
        }
        persist(u);
      },
      login: (email) => {
        let name = titleize(email.split("@")[0] ?? "Guest");
        try {
          const raw = localStorage.getItem(ACCOUNTS);
          const map                         = raw ? JSON.parse(raw) : {};
          if (map[email.toLowerCase()]) name = map[email.toLowerCase()] ;
        } catch {
          /* ignore */
        }
        const u = { name, email };
        persist(u);
        return u;
      },
      logout: () => persist(null),
    }),
    [user],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
