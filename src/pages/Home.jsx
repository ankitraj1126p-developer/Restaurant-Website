import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp, Calendar, ChefHat, Clock, Flame, Menu as MenuIcon, PartyPopper, Salad, ShoppingCart, Star, User, Utensils, X } from "lucide-react";
import { toast } from "sonner";

import GooeyNav from "@/components/GooeyNav";
import SplitText from "@/components/SplitText";
import BorderGlow from "@/components/BorderGlow";
import FloatingLines from "@/components/FloatingLines";
import FullMenuModal from "@/components/FullMenuModal";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import pizza from "@/assets/ooooo.jpg";
import burger from "@/assets/bbbbb.jpg";
import chicken from "@/assets/chicke_n.png.jpg";
import fries from "@/assets/french.jpg";
import momo from "@/assets/momo.jpg";
import roll from "@/assets/chicken_rool.jpg";
import biryani from "@/assets/biryani.jpg";
import dosa from "@/assets/dos.PNG.jpg";
import beveragesImg from "@/assets/beverages.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import interiorImg from "@/assets/interior.jpg";
import chefImg from "@/assets/chef.jpg";


const NAV = [
  { label: "Menus", href: "#menus" },
  { label: "About Us", href: "#about" },
  { label: "Top Dishes", href: "#top-dishes" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  { src: pizza, kicker: "Wood-fired", title: "Cheese Pizza" },
  { src: chicken, kicker: "Flame-glazed", title: "Fire Chicken" },
  { src: biryani, kicker: "Slow dum", title: "Handi Biryani" },
  { src: fries, kicker: "Crisp & spiced", title: "Masala Fries" },
];

const DISHES = [
  { src: momo, name: "Veg Momos", price: 149, stars: 3 },
  { src: roll, name: "Chicken Roll", price: 189, stars: 5 },
  { src: burger, name: "Flame Burger", price: 249, stars: 4 },
  { src: pizza, name: "Cheese Pizza", price: 399, stars: 4 },
  { src: biryani, name: "Handi Biryani", price: 329, stars: 4 },
  { src: dosa, name: "Butter Dosa", price: 169, stars: 3 },
  { src: chicken, name: "Tandoori Chicken", price: 449, stars: 5 },
  { src: fries, name: "Peri Peri Fries", price: 139, stars: 4 },
  { src: beveragesImg, name: "Mango Lassi", price: 139, stars: 5 },
  { src: dessertsImg, name: "Brownie Sizzler", price: 199, stars: 5 },
  { src: biryani, name: "Egg Dum Biryani", price: 279, stars: 4 },
  { src: roll, name: "Paneer Kathi Roll", price: 179, stars: 4 },
];

const MENU_ITEMS = [
  {
    src: chicken,
    name: "Tandoori Chicken",
    tag: "SEASONAL",
    price: "₹449",
    detail: "Charcoal-roasted half chicken, hung curd marinade, smoked chilli butter.",
  },
  {
    src: pizza,
    name: "Wood-Fired Pizza",
    price: "₹399",
    detail: "Slow-fermented dough, san marzano tomato, buffalo mozzarella, basil.",
  },
  {
    src: biryani,
    name: "Handi Dum Biryani",
    tag: "NEW",
    price: "₹329",
    detail: "Sealed handi rice, whole spices, saffron, burani raita and salan.",
  },
  {
    src: burger,
    name: "Flame Burger",
    price: "₹249",
    detail: "Grilled patty, aged cheddar, caramelised onion, house smoke sauce.",
  },
  {
    src: momo,
    name: "Steamed Momos",
    price: "₹149",
    detail: "Hand-folded dumplings, herbs and spices, fiery szechwan chutney.",
  },
  {
    src: roll,
    name: "Kathi Rolls",
    price: "₹189",
    detail: "Flaky paratha, grilled chicken or paneer, onions, mint mayo.",
  },
  {
    src: fries,
    name: "Peri Peri Fries",
    price: "₹139",
    detail: "Twice-fried potatoes, peri peri dust, herbs, ketchup and aioli.",
  },
  {
    src: dosa,
    name: "Butter Dosa",
    tag: "CHEF'S PICK",
    price: "₹169",
    detail: "Crisp rice crepe on banana leaf, three chutneys and hot sambar.",
  },
  {
    src: beveragesImg,
    name: "Beverages & Shakes",
    price: "₹99",
    detail: "Masala chai, cold coffee, mango lassi, mojitos and fresh lime soda.",
  },
  {
    src: dessertsImg,
    name: "Desserts",
    tag: "MOST LOVED",
    price: "₹149",
    detail: "Brownie sizzler, gulab jamun and slow-churned malai kulfi.",
  },
];

const STRENGTHS = [
  { icon: Salad, title: "Hygienic Food", detail: "Fresh produce, daily quality checks and a spotless kitchen." },
  { icon: Utensils, title: "Fresh Environment", detail: "Warm lighting, cosy seating and a calm dining floor." },
  { icon: ChefHat, title: "Skilled Chefs", detail: "Grill masters with years of charcoal and wood-fire craft." },
  { icon: PartyPopper, title: "Event & Party", detail: "Birthdays, get-togethers and full restaurant bookings." },
];

const TIMES = [
  "08 : 00 am", "09 : 00 am", "10 : 00 am", "11 : 00 am", "12 : 00 pm",
  "01 : 00 pm", "02 : 00 pm", "03 : 00 pm", "04 : 00 pm", "05 : 00 pm",
  "06 : 00 pm", "07 : 00 pm", "08 : 00 pm", "09 : 00 pm", "10 : 00 pm",
];

const FIRE_FROM = { opacity: 0, y: 40, scaleY: 1.6, rotateX: -50 }         ;
const FIRE_TO = { opacity: 1, y: 0, scaleY: 1, rotateX: 0 }         ;

function Stars({ count }                   ) {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={
            i < count ? "size-3.5 fill-primary text-primary" : "size-3.5 text-muted-foreground/50"
          }
        />
      ))}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  persons: "1",
  date: "",
  time: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const restaurantNumber = "919576236475";

  const text = `🍽️ *Fork & Flame Reservation*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
👥 Persons: ${formData.persons}
📅 Date: ${formData.date}
🕒 Time: ${formData.time}

📝 Message:
${formData.message}`;

  window.open(
    `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  setFormData({
  name: "",
  phone: "",
  persons: "1",
  date: "",
  time: "08 : 00 am",
  message: "",
});

};


  const cart = useCart();
  const auth = useAuth();

  const addItem = (item                                              ) => {
    cart.add(item);
    toast.success(`${item.name} added to cart`);
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Animated fire-line background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={false}
          parallax={false}
          animationSpeed={0.6}
          linesGradient={["#F97316", "#FBBF24", "#DC2626"]}
        />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4">
            <a href="#top" className="flex items-center gap-2.5">
              <Flame className="ff-flicker size-6 shrink-0 text-primary" />
              <SplitText
                tag="span"
                text="Fork & Flame"
                className="ff-fire-text font-display text-2xl tracking-wide sm:text-3xl"
                delay={70}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ ...FIRE_FROM }}
                to={{ ...FIRE_TO }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </a>

            <div className="mx-auto hidden lg:block">
              <GooeyNav
                items={NAV}
                particleCount={20}
                particleDistances={[80, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={400}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <button
                onClick={() => cart.setOpen(true)}
                aria-label="Cart"
                className="relative rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <ShoppingCart className="size-4" />
                {cart.count > 0 && (
                  <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cart.count}
                  </span>
                )}
              </button>
              <Link
                to="/login"
                className="hidden items-center gap-2 rounded-full border border-primary/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
              >
                <User className="size-3.5" />
                {auth.user ? auth.user.name.split(" ")[0] : "Login"}
              </Link>
              <Link
                to="/login"
                aria-label="Account"
                className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary sm:hidden"
              >
                <User className="size-4" />
              </Link>
              {auth.user ? (
                <button
                  onClick={() => {
                    auth.logout();
                    toast("Signed out — see you soon!");
                  }}
                  className="hidden rounded-full border border-border px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
                >
                  Logout
                </button>
              ) : null}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
                className="rounded-full border border-border p-2.5 lg:hidden"
              >
                {open ? <X className="size-4" /> : <MenuIcon className="size-4" />}
              </button>
            </div>
          </div>

          {open && (
            <nav className="ff-rise border-t border-border bg-card px-5 py-4 lg:hidden">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {n.label}
                </a>
              ))}
              {auth.user ? (
                <>
                  <span className="block py-2 text-sm uppercase tracking-[0.14em] text-primary">
                    Hi, {auth.user.name.split(" ")[0]}
                  </span>
                  <button
                    onClick={() => {
                      auth.logout();
                      setOpen(false);
                      toast("Signed out — see you soon!");
                    }}
                    className="block py-2 text-sm uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block py-2 text-sm uppercase tracking-[0.14em] text-primary">
                  Login
                </Link>
              )}
            </nav>
          )}
        </header>

        <main id="top">
          {/* Hero with animated slider */}
          <section className="relative overflow-hidden">
            <div className="flex ff-slider">
              {SLIDES.map((s) => (
                <div key={s.title} className="relative h-[78vh] min-h-[520px] w-full shrink-0">
                  <img src={s.src} alt={s.title} className="size-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-primary">{s.kicker}</p>
                    <h1 className="ff-rise mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-7xl">{s.title}</h1>
                    <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
                      Cooked over open fire, plated with patience. Welcome to Fork &amp; Flame —
                      your endless celebration place.
                    </p>
                    <div className="mt-8">
                      <a
                        href="#menus"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-transform hover:scale-105"
                      >
                        View Menus
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Marquee */}
          <div className="overflow-hidden border-y border-border bg-card py-3">
            <div className="ff-marquee flex w-max gap-10 whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-10">
                  {["Charcoal Grill", "Wood Oven", "Dum Biryani", "Street Bites", "Late Night Kitchen"].map(
                    (t) => (
                      <span
                        key={t}
                        className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                      >
                        <Flame className="size-3 text-primary" /> {t}
                      </span>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Our story — between slider and top dishes */}
          <section id="about" className="relative overflow-hidden py-20 lg:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Our Story</p>
                <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="h-px w-16 bg-primary/50" />
                  <span className="rotate-45 border border-primary/60 p-1" />
                  <span className="h-px w-16 bg-primary/50" />
                </div>
                <h2 className="mt-7 font-display text-4xl leading-tight sm:text-6xl">
                  Every Flavor
                  <br />
                  Tells a Story
                </h2>
                <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground lg:mx-0">
                  Fork &amp; Flame began in 2014 as a small charcoal counter and grew into a full
                  kitchen built around open fire. Our chefs work the grill, the wood oven and the
                  handi side by side, so one table can share smoky kebabs, a bubbling pizza and a
                  slow-dum biryani at the same time.
                </p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em]">
                  Book Through Call
                </p>
                <a href="tel:+919576236475" className="mt-2 block font-display text-3xl text-primary">
                  +91 95762 36475
                </a>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="border border-primary/70 px-9 py-4 text-[11px] uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    View All Menu
                  </button>
                </div>
              </div>

              <div className="relative pb-24 sm:pb-32">
                <img
                  src={interiorImg}
                  alt="Warm dining room at Fork & Flame"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="h-[340px] w-full object-cover sm:h-[440px]"
                />
                <img
                  src={chefImg}
                  alt="Fork & Flame chef plating a dish"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute -bottom-2 left-0 h-40 w-2/5 border-4 border-background object-cover sm:h-56"
                />
                <div className="absolute -top-6 right-0 grid size-28 place-items-center rounded-full border border-primary/50 bg-background/90 sm:size-36">
                  <span className="ff-spin absolute inset-2 rounded-full border border-dashed border-primary/40" />
                  <div className="text-center">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Since</p>
                    <p className="font-display text-2xl text-primary sm:text-4xl">2014</p>
                    <p className="mt-0.5 text-[8px] uppercase tracking-[0.22em] text-muted-foreground">
                      Quality Food
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top dishes */}
          <section id="top-dishes" className="mx-auto max-w-7xl px-5 pb-24">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-primary">Guest favourites</p>
            <div className="mt-3 flex justify-center">
              <SplitText
                tag="h2"
                text="Top Dishes"
                className="ff-fire-text text-4xl sm:text-5xl"
                delay={60}
                duration={1}
                splitType="chars"
                from={{ ...FIRE_FROM }}
                to={{ ...FIRE_TO }}
                rootMargin="-80px"
              />
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {DISHES.map((d) => (
                <BorderGlow
                  key={d.name}
                  borderRadius={14}
                  glowColor="40 90 65"
                  glowRadius={36}
                  glowIntensity={0.9}
                  edgeSensitivity={20}
                  backgroundColor="oklch(0.21 0.015 58)"
                  colors={["#f97316", "#fbbf24", "#dc2626"]}
                  className="group"
                >
                  <article>
                    <div className="h-60 overflow-hidden">
                      <img
                        src={d.src}
                        alt={d.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <h3 className="text-xl">{d.name}</h3>
                        <div className="mt-2">
                          <Stars count={d.stars} />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-primary">₹{d.price}</p>
                        <button
                          onClick={() => addItem({ name: d.name, price: d.price, src: d.src })}
                          className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </BorderGlow>
              ))}
            </div>
          </section>

          {/* Delicious Menu — two column with dish images */}
          <section id="menus" className="border-y border-border bg-card/60 py-24">
            <div className="mx-auto max-w-6xl px-5">
              <div className="flex justify-center">
                <SplitText
                  tag="h2"
                  text="Delicious Menu"
                  className="ff-fire-text text-4xl sm:text-6xl"
                  delay={55}
                  duration={1}
                  splitType="chars"
                  from={{ ...FIRE_FROM }}
                  to={{ ...FIRE_TO }}
                  rootMargin="-80px"
                />
              </div>

              <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2 md:divide-x md:divide-border">
                {MENU_ITEMS.map((m, i) => (
                  <div key={m.name} className={`flex gap-5 ${i % 2 === 1 ? "md:pl-14" : ""}`}>
                    <div className="ff-glow-img size-24 shrink-0 overflow-hidden rounded-2xl border border-border">
                      <img src={m.src} alt={m.name} loading="lazy" className="size-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="truncate text-2xl">{m.name}</h3>
                        {m.tag && (
                          <span className="shrink-0 bg-primary/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                            {m.tag}
                          </span>
                        )}
                        <span className="hidden h-px flex-1 bg-border sm:block" />
                        <span className="shrink-0 font-display text-xl text-primary">{m.price}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setMenuOpen(true)}
                  className="border border-primary/70 px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View All Menu
                </button>
              </div>
            </div>
          </section>

          {/* Our Strength */}
          <section className="mx-auto max-w-7xl px-5 py-24">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-primary">Why choose us</p>
            <div className="mt-3 flex justify-center">
              <SplitText
                tag="h2"
                text="Our Strength"
                className="ff-fire-text text-4xl sm:text-5xl"
                delay={60}
                duration={1}
                splitType="chars"
                from={{ ...FIRE_FROM }}
                to={{ ...FIRE_TO }}
                rootMargin="-80px"
              />
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STRENGTHS.map((s) => (
                <article
                  key={s.title}
                  className="group border border-border bg-card/70 px-7 py-12 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/60"
                >
                  <s.icon
                    className="mx-auto size-12 text-primary transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.2}
                  />
                  <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Reservation + Contact */}
          <section id="contact" className="border-t border-border bg-card/60">
            <div className="grid lg:grid-cols-[1.4fr_1fr]">
              <div className="px-5 py-20 sm:px-12">
                <div className="mx-auto max-w-2xl">
                  <div className="flex justify-center">
                    <SplitText
                      tag="h2"
                      text="Online Reservation"
                      className="ff-fire-text text-4xl sm:text-5xl"
                      delay={50}
                      duration={1}
                      splitType="chars"
                      from={{ ...FIRE_FROM }}
                      to={{ ...FIRE_TO }}
                      rootMargin="-60px"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Booking request{" "}
                    <a href="tel:+919576236475" className="text-primary">
                      +91 95762 36475
                    </a>{" "}
                    or fill out the order form
                  </p>

                  {/* <form
                    className="mt-10 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thanks! Your table request has been noted. We'll call you to confirm.");
                    }}
                  > */}

                  <form className="mt-10 space-y-4" onSubmit={handleSubmit}>


                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* <input
                        required
                        placeholder="Your Name"
                        className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                      /> */}

                      <input
  required
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
/>


                      {/* <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                      /> */}


                      <input
  required
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  maxLength={10}
pattern="[0-9]{10}"
  className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
/>

                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />


                        {/* <select
                          defaultValue="1"
                          aria-label="Number of persons"
                          className="w-full appearance-none rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-9 text-sm outline-none focus:border-primary"
                        >
                          {Array.from({ length: 12 }).map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1} {i === 0 ? "Person" : "People"}
                            </option>
                          ))}
                        </select> */}

                        <select
  name="persons"
  value={formData.persons}
  onChange={handleChange}
  aria-label="Number of persons"
  className="w-full appearance-none rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-9 text-sm outline-none focus:border-primary"
>
  {Array.from({ length: 12 }).map((_, i) => (
    <option key={i} value={i + 1}>
      {i + 1} {i === 0 ? "Person" : "People"}
    </option>
  ))}
</select>




                      </div>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />


                        {/* <input
                          type="date"
                          aria-label="Reservation date"
                          className="w-full rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-4 text-sm outline-none focus:border-primary [color-scheme:dark]"
                        /> */}

                        <input
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
  min={new Date().toISOString().split("T")[0]}
  aria-label="Reservation date"
  className="w-full rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-4 text-sm outline-none focus:border-primary [color-scheme:dark]"
/>



                      </div>
                      <div className="relative">
                        <Clock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />


                        {/* <select
                          defaultValue="08 : 00 pm"
                          aria-label="Reservation time"
                          className="w-full appearance-none rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-9 text-sm outline-none focus:border-primary"
                        >
                          {TIMES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select> */}

                        <select
  name="time"
  value={formData.time}
  onChange={handleChange}
  required
  aria-label="Reservation time"
  className="w-full appearance-none rounded-none border border-border bg-secondary/60 py-4 pl-11 pr-9 text-sm outline-none focus:border-primary"
>
  {TIMES.map((t) => (
    <option key={t} value={t}>
      {t}
    </option>
  ))}
</select>





                      </div>
                    </div>


                    {/* <textarea
                      rows={5}
                      placeholder="Message"
                      className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                    /> */}


                    <textarea
  rows={5}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  className="w-full rounded-none border border-border bg-secondary/60 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
/>



                    <button
                      type="submit"
                      className="w-full bg-primary py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Book a table
                    </button>
                  </form>
                </div>
              </div>

              <div className="relative border-t border-border bg-background/80 px-5 py-20 text-center lg:border-l lg:border-t-0">
                <h2 className="font-display text-4xl sm:text-5xl">Contact Us</h2>
                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.14em]">Booking Request</p>
                <a href="tel:+919576236475" className="mt-3 block font-display text-3xl text-primary">
                  +91 95762 36475
                </a>
                <Flame className="mx-auto mt-8 size-4 text-primary/70" />
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em]">Location</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  124 Food Street, Flavor Town,
                  <br />
                  Mumbai 400001, India
                </p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em]">Email</p>
                <p className="mt-3 text-sm text-muted-foreground">hello@forkandflame.in</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center">
            <div className="flex items-center gap-2">
              <Flame className="size-5 text-primary" />
              <span className="font-display text-xl tracking-wide">Fork &amp; Flame</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Fork &amp; Flame Restaurant. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      {menuOpen && <FullMenuModal onClose={() => setMenuOpen(false)} />}
      <CartDrawer />
    </div>
  );
}

export default Index;
