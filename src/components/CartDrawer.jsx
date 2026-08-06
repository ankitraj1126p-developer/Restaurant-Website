import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { toast } from "sonner";

import { useCart } from "@/context/cart-context";

export default function CartDrawer() {
  const { lines, total, count, setQty, remove, clear, open, setOpen } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        aria-label="Close cart"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <aside className="ff-slide-in relative flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="flex items-center gap-3 font-display text-2xl">
            <ShoppingCart className="size-5 text-primary" /> Your Cart
            <span className="text-sm text-muted-foreground">({count})</span>
          </h2>
          <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary">
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingCart className="mx-auto size-10 text-muted-foreground/60" />
                <p className="mt-4 text-sm text-muted-foreground">Your cart is empty.</p>
                <button onClick={() => setOpen(false)} className="mt-4 text-xs uppercase tracking-[0.2em] text-primary">
                  Browse the menu
                </button>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((l) => (
                <li key={l.name} className="flex gap-4 border-b border-border/70 pb-4">
                  <img src={l.src} alt={l.name} loading="lazy" className="size-20 shrink-0 rounded-lg border border-border object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base">{l.name}</p>
                    <p className="mt-1 text-sm text-primary">₹{l.price}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button aria-label="Decrease" onClick={() => setQty(l.name, l.qty - 1)} className="grid size-7 place-items-center rounded-full border border-border hover:border-primary hover:text-primary">
                        <Minus className="size-3" />
                      </button>
                      <span className="min-w-6 text-center text-sm">{l.qty}</span>
                      <button aria-label="Increase" onClick={() => setQty(l.name, l.qty + 1)} className="grid size-7 place-items-center rounded-full border border-border hover:border-primary hover:text-primary">
                        <Plus className="size-3" />
                      </button>
                      <button aria-label="Remove" onClick={() => remove(l.name)} className="ml-auto text-muted-foreground hover:text-destructive">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                  <p className="shrink-0 font-display text-lg">₹{l.price * l.qty}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-[0.18em] text-muted-foreground">Total</span>
              <span className="font-display text-2xl text-primary">₹{total}</span>
            </div>
            <button
              onClick={() => {
                toast.success("Order placed! We'll call you on +91 95762 36475 to confirm.");
                clear();
                setOpen(false);
              }}
              className="mt-5 w-full bg-primary py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Place order
            </button>
            <button onClick={clear} className="mt-3 w-full text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-destructive">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
