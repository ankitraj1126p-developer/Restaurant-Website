import { useState } from "react";
import { Flame, Plus, X } from "lucide-react";
import { toast } from "sonner";

import { FULL_MENU } from "@/lib/menu-data";
import { useCart } from "@/context/cart-context";

export default function FullMenuModal({ onClose }                         ) {
  const { add } = useCart();
  const [active, setActive] = useState(FULL_MENU[0] .title);
  const category = FULL_MENU.find((c) => c.title === active) ?? FULL_MENU[0] ;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Fork &amp; Flame</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Full Menu</h2>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="rounded-full border border-border p-3 hover:border-primary hover:text-primary">
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FULL_MENU.map((c) => (
            <button
              key={c.title}
              onClick={() => setActive(c.title)}
              className={`border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                c.title === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Flame className="size-4 text-primary" />
          <h3 className="font-display text-2xl">{category.title}</h3>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {category.items.map((m) => (
            <div key={m.name} className="flex gap-5">
              <div className="ff-glow-img size-24 shrink-0 overflow-hidden rounded-2xl border border-border">
                <img src={m.src} alt={m.name} loading="lazy" className="size-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="truncate text-xl">{m.name}</h4>
                  {m.tag && (
                    <span className="shrink-0 bg-primary/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                      {m.tag}
                    </span>
                  )}
                  <span className="hidden h-px flex-1 border-b border-dashed border-border sm:block" />
                  <span className="shrink-0 font-display text-lg text-primary">₹{m.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
                <button
                  onClick={() => {
                    add({ name: m.name, price: m.price, src: m.src });
                    toast.success(`${m.name} added to cart`);
                  }}
                  className="mt-3 inline-flex items-center gap-2 border border-primary/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Plus className="size-3" /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center pb-6">
          <button onClick={onClose} className="border border-primary/60 px-8 py-3 text-[11px] uppercase tracking-[0.28em] text-primary hover:bg-primary hover:text-primary-foreground">
            Close menu
          </button>
        </div>
      </div>
    </div>
  );
}
