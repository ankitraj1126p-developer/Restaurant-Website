import pizza from "@/assets/ooooo.jpg";
import burger from "@/assets/bbbbb.jpg";
import chicken from "@/assets/chicke_n.png.jpg";
import fries from "@/assets/french.jpg";
import momo from "@/assets/momo.jpg";
import roll from "@/assets/chicken_rool.jpg";
import biryani from "@/assets/biryani.jpg";
import dosa from "@/assets/dos.PNG.jpg";
import beverages from "@/assets/beverages.jpg";
import desserts from "@/assets/desserts.jpg";
import hakka from "@/assets/Hakka Noodles.jpg";
import  rice from "@/assets/Chinese Fried Rice.jpg";
import Chow from "@/assets/Chow Mein.jpg";
import Kung from "@/assets/Kung Pao chicken.jpg";
import Man from "@/assets/Veg Manchurian.jpg";
import Mar from "@/assets/Margherita Pizza.jpg";
import Spa from "@/assets/Spaghetti Carbonara.jpg";
import Fet from "@/assets/Fettuccine Alfredo.jpg";
import Gulab from "@/assets/Gulab.jpg";
import Kulfi from "@/assets/Kulfi.jpg";
import Brow from "@/assets/Brownie Sizzler.jpg";
import Naan from "@/assets/Naan.jpg";
import Tan from "@/assets/Tandoori.jpg";
import Jer from "@/assets/Jeera.jpg";
import Cha from "@/assets/Chai.jpg";
import Col from "@/assets/Cold.jpg";
import Fre from "@/assets/Fresh.jpg";
import Mango from "@/assets/Mango.jpg";
import Blu from "@/assets/Blue.jpg";
import Oreo from "@/assets/Oreo.jpg";
import Vir from "@/assets/Virgin.jpg";

import  Pep from "@/assets/Pep Pizza.jpg";
import Paneer from "@/assets/Paneer.jpg";
import Mas from "@/assets/Masala.jpg";
import Idli from "@/assets/Idli.jpg";
import Gar from "@/assets/Garlic.jpg";
import But from "@/assets/Butter.jpg";
import Dal from "@/assets/Dal.jpg";
import Egg from "@/assets/Egg.jpg";

import Fla from "@/assets/Flame.jpg";
import Keb from "@/assets/Kebab.jpg";
import Tik from "@/assets/Tikka.jpg";

import Fries from "@/assets/Fries.jpg";
import Kath from "@/assets/Kathi.jpg";

import Momos from "@/assets/Momos.jpg";



export const IMG = {
  pizza,
  burger,
  chicken,
  fries,
  momo,
  roll,
  biryani,
  dosa,
  beverages,
  desserts,
  hakka,
  rice,
  Chow,
  Kung,
  Man,
  Mar,
  Spa,
  Fet,
  Gulab,
  Kulfi,
  Brow,
  Naan,
  Tan,
  Jer,
  Cha,
  Col,
  Fre,
  Mango,
  Blu,
  Oreo,
  Vir,
  Pep,
  Paneer,
  Mas,
  Idli,
  Gar,
  But,
  Dal,
  Egg,
  Fla,
  Keb,
  Tik,
  Fries,
  Kath,
  Momos
};

export const FULL_MENU                 = [
  {
    title: "From the Grill",
    items: [
      { name: "Tandoori Chicken (Half)", price: 449, detail: "Charcoal-roasted, hung curd marinade, smoked chilli butter.", src: IMG.chicken, tag: "SEASONAL" },
      { name: "Chicken Seekh Kebab", price: 379, detail: "Minced chicken, green chilli, mint chutney.", src: IMG.Keb },
      { name: "Flame Burger", price: 249, detail: "Grilled patty, aged cheddar, caramelised onion, smoke sauce.", src: IMG.Fla },
      { name: "Crispy Veg Burger", price: 199, detail: "Spiced potato patty, slaw, chipotle mayo.", src: IMG.burger },
      { name: "Paneer Tikka", price: 329, detail: "Charred paneer, capsicum, achari marinade.", src: IMG.Tik },
    ],
  },
  {
    title: "From the Wood Oven",
    items: [
      { name: "Margherita Pizza", price: 349, detail: "San marzano tomato, buffalo mozzarella, basil.", src: IMG.Mar },
      { name: "Pepperoni Pizza", price: 449, detail: "Cured pepperoni, mozzarella, chilli honey drizzle.", src: IMG.Pep },
      { name: "Paneer Tikka Pizza", price: 429, detail: "Tikka paneer, onion, coriander, cheese blend.", src: IMG.Paneer },
      { name: "Cheese Garlic Bread", price: 179, detail: "Wood-fired bread, garlic butter, molten cheese.", src: IMG.Gar },
    ],
  },
  {
    title: "From the Handi",
    items: [
      { name: "Handi Dum Biryani", price: 329, detail: "Sealed handi rice, saffron, burani raita and salan.", src: IMG.biryani, tag: "NEW" },
      { name: "Egg Dum Biryani", price: 279, detail: "Long grain rice, spiced eggs, fried onion.", src: IMG.Egg },
      { name: "Butter Chicken", price: 389, detail: "Tandoor chicken, tomato butter gravy, fenugreek.", src: IMG.chicken },
      { name: "Dal Smoked", price: 229, detail: "Slow black dal, charcoal smoke, white butter.", src: IMG.Dal },
    ],
  },
  {
    title: "Street & Small Plates",
    items: [
      { name: "Steamed Momos", price: 149, detail: "Hand-folded dumplings, fiery szechwan chutney.", src: IMG.Momos },
      { name: "Tandoori Momos", price: 189, detail: "Charred momos, tandoori masala, mint dip.", src: IMG.momo },
      { name: "Chicken Kathi Roll", price: 189, detail: "Flaky paratha, grilled chicken, onions, mint mayo.", src: IMG.roll },
      { name: "Paneer Kathi Roll", price: 179, detail: "Paratha, masala paneer, pickled onion.", src: IMG.Kath },
      { name: "Peri Peri Fries", price: 139, detail: "Twice-fried potatoes, peri peri dust, aioli.", src: IMG.fries },
      { name: "Cheese Loaded Fries", price: 189, detail: "Fries, cheese sauce, jalapeño, herbs.", src: IMG.Fries },
    ],
  },
  {
    title: "South Indian",
    items: [
      { name: "Butter Dosa", price: 169, detail: "Crisp rice crepe, three chutneys, hot sambar.", src: IMG.But, tag: "CHEF'S PICK" },
      { name: "Mysore Masala Dosa", price: 199, detail: "Red chilli spread, potato masala, ghee roast.", src: IMG.Mas },
      { name: "Idli Sambar", price: 129, detail: "Steamed idli, lentil sambar, coconut chutney.", src: IMG.Idli },
    ],
  },
  {
    title: "Chinese",
    items: [
      { name: "Hakka Noodles", price: 180, detail: "Wok-tossed noodles, julienne veggies, dark soy sauce.", src: IMG.hakka, tag: "SPICY" },
      { name: "Kung Pao Chicken", price: 199, detail: "Spicy wok-tossed chicken, peanuts, bell peppers, Sichuan sauce.", src: IMG.Kung },
      { name: "Chicken Fried Rice", price: 229, detail: "Wok rice, egg, spring onion, house sauce.", src: IMG.rice },
      { name: "Chow Mein", price: 190, detail: "Stir-fried noodles, fresh vegetables, soy-garlic seasoning.", src: IMG.Chow },
      { name: "Manchurian Balls", price: 189, detail: "Veg dumplings in tangy garlic gravy.", src: IMG.Man },
      { name: "Schezwan Momos", price: 189, detail: "Steamed momos tossed in fiery schezwan.", src: IMG.momo },
    ],
  },
  {
    title: "Italian",
    items: [
      { name: "Fettuccine Alfredo", price: 299, detail: "Penne, cream, parmesan, cracked pepper.", src: IMG.Fet },
      { name: "Margherita Pizza", price: 279, detail: "Spicy tomato basil sauce, chilli flakes.", src: IMG.Mar },
      { name: "Spaghetti Carbonara", price: 379, detail: "Layered pasta, ragu, béchamel, mozzarella.", src: IMG.Spa, tag: "NEW" },
      { name: "Bruschetta", price: 179, detail: "Toasted bread, tomato, basil, olive oil.", src: IMG.pizza },
      { name: "Creamy Risotto", price: 349, detail: "Arborio rice, mushroom, butter, parmesan.", src: IMG.biryani },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Masala Chai", price: 69, detail: "Slow-brewed tea, ginger, cardamom.", src: IMG.Cha },
      { name: "Cold Coffee", price: 149, detail: "Double espresso, milk, ice, cocoa dust.", src: IMG.Col },
      { name: "Fresh Lime Soda", price: 99, detail: "Lime, soda, sweet or salted.", src: IMG.Fre },
      { name: "Mango Lassi", price: 139, detail: "Thick curd, alphonso mango, saffron.", src: IMG.Mango },
    ],
  },
  {
    title: "Shakes & Mocktails",
    items: [
      { name: "Oreo Shake", price: 179, detail: "Cookies, vanilla ice cream, whipped cream.", src: IMG.Oreo },
      { name: "Virgin Mojito", price: 159, detail: "Mint, lime, crushed ice, soda.", src: IMG.Vir },
      { name: "Blue Lagoon", price: 169, detail: "Blue curaçao syrup, lemon, sprite.", src: IMG.Blu },
    ],

  },
  {
    title: "Breads & Rice",
    items: [
      { name: "Butter Naan", price: 69, detail: "Tandoor naan brushed with butter.", src: IMG.Naan },
      { name: "Tandoori Roti", price: 49, detail: "Whole wheat, clay oven baked.", src: IMG.Tan },
      { name: "Jeera Rice", price: 149, detail: "Basmati, cumin, ghee.", src: IMG.Jer },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Brownie Sizzler", price: 199, detail: "Warm brownie, vanilla ice cream, hot chocolate.", src: IMG.Brow, tag: "MOST LOVED" },
      { name: "Gulab Jamun", price: 129, detail: "Two jamuns, warm saffron syrup.", src: IMG.Gulab },
      { name: "Malai Kulfi", price: 149, detail: "Slow-cooked milk kulfi, pistachio.", src: IMG.Kulfi },
    ],
  },
];
