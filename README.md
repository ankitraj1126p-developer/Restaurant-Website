# Fork & Flame 🔥

Fire-cooked restaurant website — React 19 + TanStack Start + Vite + Tailwind CSS v4.

## VS Code me chalane ka tarika

1. Folder ko VS Code me open karo: `code fork-and-flame`
2. Node.js 20+ install hona chahiye (`node -v` se check karo)
3. Dependencies install karo:
   ```bash
   npm install
   ```
4. Dev server start karo:
   ```bash
   npm run dev
   ```
5. Browser me kholo: http://localhost:8080

## Production build

```bash
npm run build      # build banata hai
npm run preview    # build ko locally test karo
```

## GitHub pe push

```bash
git init
git add .
git commit -m "Fork & Flame website"
git branch -M main
git remote add origin https://github.com/<username>/fork-and-flame.git
git push -u origin main
```

## Folder structure

- `src/routes/` — pages (`index.tsx` home, `login.tsx`, `signup.tsx`)
- `src/components/` — GooeyNav, SplitText, BorderGlow, FloatingLines, SpecularButton, CartDrawer, FullMenuModal
- `src/lib/` — `menu-data.ts` (saara menu), `cart-context.tsx`, `auth-context.tsx`
- `src/assets/` — dish images + logo
- `src/styles.css` — theme colors + animations

Note: `src/routeTree.gen.ts` auto-generate hoti hai `npm run dev` chalane par.
