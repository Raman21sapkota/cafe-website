export interface Price {
  value?: string;
  small?: string;
  large?: string;
  glass?: string;
  bottle?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: Price;
  dietary?: string[];
  addons?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  variant?: "subsection";
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee & Hot Drinks",
    items: [
      { name: "Babyccino", price: { value: "$2.50" } },
      { name: "Espresso", price: { value: "$4.50" } },
      { name: "Long Black", price: { small: "$5.00", large: "—" } },
      { name: "Macchiato", price: { small: "$5.00", large: "—" } },
      { name: "Hot Chocolate", price: { small: "$5.00", large: "$6.00" } },
      { name: "Mocha", price: { small: "$5.00", large: "$6.00" } },
      { name: "Dirty Chai", price: { small: "$5.00", large: "$6.00" } },
      { name: "Macchiato, Piccolo", price: { small: "$5.00", large: "—" } },
      {
        name: "Cappuccino, Flat White, Cafe Latte",
        price: { small: "$5.00", large: "$6.00" },
      },
    ],
  },
  {
    id: "extras-coffee",
    title: "Coffee Extras",
    subtitle: "Add +$0.50",
    variant: "subsection",
    items: [
      {
        name: "Extra Shot / Almond / Bonsoy / Oat Milk / Decaf / Caramel / Vanilla Syrup / Lactose Free",
        price: { value: "+$0.50" },
      },
    ],
  },
  {
    id: "teas",
    title: "Loose Leaf Teas",
    items: [
      { name: "English Breakfast", price: { value: "$5.80" } },
      { name: "Earl Grey", price: { value: "$5.80" } },
      { name: "Citrus Mint", price: { value: "$5.80" } },
      { name: "Jasmine Green", price: { value: "$5.80" } },
      { name: "Lemon Grass & Ginger", price: { value: "$5.80" } },
    ],
  },
  {
    id: "iced",
    title: "Iced Drinks",
    items: [
      { name: "Iced Latte", price: { value: "$6.00" } },
      { name: "Iced Long Black", price: { value: "$6.00" } },
      { name: "Iced Coffee or Iced Chocolate", price: { value: "$7.90" } },
      { name: "Iced Mocha", price: { value: "$7.90" } },
      {
        name: "Sparkling Lemonade with Lime Juice & Mint",
        price: { value: "$8.00" },
      },
      {
        name: "Milk Shakes (Vanilla / Strawberry / Blue Heaven / Chocolate / Caramel / Banana)",
        price: { small: "Sm $6.00", large: "Lg $8.00" },
      },
    ],
  },
  {
    id: "beers",
    title: "Bottled Beers & Cider",
    items: [
      { name: "Corona", price: { value: "$10" } },
      { name: "Carlton Draught", price: { value: "$10" } },
      { name: "James Boag's Premium Light", price: { value: "$10" } },
      { name: "Peroni", price: { value: "$10" } },
      { name: "Flying Brick Original Cider", price: { value: "$12" } },
      { name: "Stone and Wood", price: { value: "$12" } },
    ],
  },
  {
    id: "spirits",
    title: "Gin, Vodka & Whisky",
    items: [
      { name: "Bombay Dry Gin + Tonic Water", price: { value: "$12" } },
      { name: "Absolut Vodka + Mixer", price: { value: "$12" } },
      { name: "Assorted Whiskey + Mixer", price: { value: "$12" } },
      { name: "Teddy and the Fox Gin + Tonic Water", price: { value: "$14" } },
    ],
  },
  {
    id: "sparkling",
    title: "Wine — Sparkling",
    items: [
      {
        name: "Varichon et Clerc Brut — Savoie, France",
        price: { glass: "$13", bottle: "$45" },
      },
      { name: "D'Sas Prosecco — King Valley, VIC", price: { glass: "$12", bottle: "$45" } },
      {
        name: "En Vie Sparkling Blanc de Noir — Yarra Valley, VIC",
        price: { bottle: "$50" },
      },
    ],
  },
  {
    id: "rose",
    title: "Wine — Rosé",
    items: [
      {
        name: "Bouchard Ainé & Fils Rosé — France",
        price: { glass: "$12", bottle: "$48" },
      },
    ],
  },
  {
    id: "whites",
    title: "Wine — Whites",
    items: [
      {
        name: "Mount Avoca Moats Lane Sauvignon Blanc — Pyrenees, VIC",
        price: { glass: "$12", bottle: "$45" },
      },
      {
        name: "Santa & D'Sas Pinot Grigio — King Valley, VIC",
        price: { glass: "$12", bottle: "$48" },
      },
      {
        name: "Tim Adams Riesling — Clare Valley, SA",
        price: { glass: "$12", bottle: "$48" },
      },
      {
        name: "2022 Tim Adams Riesling — Clare Valley, SA",
        price: { glass: "$13", bottle: "$48" },
      },
      {
        name: "Longboard Chardonnay — Bellbrae, VIC",
        price: { glass: "$14", bottle: "$52" },
      },
      { name: "St Brioc Fiano — McLaren Vale, SA", price: { bottle: "$50" } },
    ],
  },
  {
    id: "reds",
    title: "Wine — Reds",
    items: [
      { name: "Mr Mick Shiraz — Clare Valley, SA", price: { glass: "$12", bottle: "$45" } },
      {
        name: "Ricca Terra Juicy June Negro Grenache — Riverland, VIC",
        price: { glass: "$12", bottle: "$48" },
      },
      {
        name: "Cat Out of the Bag Pinot Noir — Bellarine Peninsula, VIC",
        price: { glass: "$14", bottle: "$52" },
      },
      {
        name: "Mount Avoca 'Estate' 'Old Vine' Shiraz — Pyrenees, VIC",
        price: { bottle: "$50" },
      },
      {
        name: "Organic Hill Cabernet Sauvignon — McLaren Vale, SA",
        price: { bottle: "$50" },
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      {
        name: "Fruit Toast / Sourdough Toast",
        description: "2 toasts with raspberry jam or vegemite",
        price: { value: "$10.00" },
      },
      {
        name: "Eggs Your Way",
        description: "2 free range poached, fried or scrambled eggs on toasted sourdough",
        price: { value: "$14.00" },
        dietary: ["GFO"],
        addons: "Add bacon +$5",
      },
      {
        name: "Healthy Bowl",
        description: "House made granola, fresh seasonal fruit, vanilla yogurt and chia seeds",
        price: { value: "$18.00" },
      },
      {
        name: "Pancake Stack",
        description: "2 buttermilk pancakes with vanilla bean ice cream, Canadian maple syrup and Lindt chocolate flakes",
        price: { value: "$20.00" },
        addons: "Add bacon +$5 / fresh berries +$5",
      },
      {
        name: "Smashed Avo",
        description: "Smashed avocado on toasted sourdough with feta, pumpkin and sunflower seeds, coriander and fresh lemon wedge",
        price: { value: "$22.50" },
        dietary: ["VO", "GFO"],
        addons: "Add poached egg +$3",
      },
      {
        name: "Chilli Scrambled",
        description: "Capsicum, onions, spinach, jalapeños and eggs on toasted sourdough",
        price: { value: "$24.00" },
        dietary: ["GFO"],
        addons: "Add avocado +$4",
      },
      {
        name: "Eggs Benedict",
        description: "2 free range poached eggs, crispy bacon and hollandaise on toasted sourdough",
        price: { value: "$24.50" },
        dietary: ["GFO"],
        addons: "Add avocado +$4",
      },
      {
        name: "Veggie Brekky",
        description: "Grilled mushrooms, wilted spinach, roasted red capsicum, blistered cherry tomatoes, tossed with house red pesto, feta and avocado on toasted sourdough",
        price: { value: "$27.50" },
        dietary: ["VO", "GFO"],
        addons: "Add poached egg +$3",
      },
      {
        name: "King's Big Breakfast",
        description: "Grilled bacon, 2 free range eggs your way, grilled tomato, sautéed mushroom, wilted spinach, hash brown, toasted sourdough with tomato relish",
        price: { value: "$29.50" },
        dietary: ["GFO"],
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      {
        name: "Veggie Burger",
        description: "Veggie patty, cheese, Lonsdale tomato, cos lettuce, roasted red capsicum, red onion, kewpie mayo in a milk bun with chips",
        price: { value: "$24.50" },
        dietary: ["GFO"],
      },
      {
        name: "Fish Burger",
        description: "Southern style fried barramundi fillet, roasted red capsicum, red onion, rocket and garlic aioli in a milk bun with chips",
        price: { value: "$24.50" },
      },
      {
        name: "Beer Battered Barramundi",
        description: "2 salt water barramundi fillets with chips, gourmet salad, tartare and lemon wedge",
        price: { value: "$25.00" },
      },
      {
        name: "Open Lamb Souvlaki",
        description: "Marinated lamb on a warm tortilla with lettuce, Lonsdale tomato, red onion, olives, tzatziki and chips",
        price: { value: "$25.00" },
        dietary: ["GFO"],
      },
      {
        name: "The Big Boy Burger",
        description: "Gourmet beef with bacon, cheese, fried egg, red onion, Lonsdale tomato, lettuce and tomato relish in a milk bun with chips",
        price: { value: "$25.00" },
        dietary: ["GFO"],
      },
      {
        name: "Chicken Burger",
        description: "Crispy seasoned fried chicken breast with cheese, kewpie mayo, slaw and chips",
        price: { value: "$25.00" },
      },
      {
        name: "Fisherman's Basket",
        description: "White fish, prawn cutlets, calamari rings, scallops with chips, salad, tartare and lemon wedge",
        price: { value: "$25.00" },
      },
      {
        name: "Warm Chicken Caesar Salad",
        description: "Cos lettuce, bacon, poached chicken, parmesan, croutons in house caesar dressing topped with a poached egg",
        price: { value: "$25.00" },
        dietary: ["GFO"],
      },
      {
        name: "Calamari Salad",
        description: "Lightly fried lemon pepper local squid with rocket, red onion, beans, broccolini and roasted red capsicum in house dressing",
        price: { value: "$25.00" },
        dietary: ["GFO"],
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { name: "Hollandaise Sauce", price: { value: "$2.50" } },
      { name: "Hash Brown", price: { value: "$3.00" } },
      { name: "Gluten Free Bread", price: { value: "$3.50" } },
      { name: "Poached Egg", price: { value: "$3.50" } },
      { name: "Grilled Tomato", price: { value: "$3.50" } },
      { name: "Spinach", price: { value: "$4.00" } },
      { name: "Avocado", price: { value: "$4.00" } },
      { name: "Mushroom", price: { value: "$4.50" } },
      { name: "Bacon", price: { value: "$5.00" } },
    ],
  },
];

export const layout = {
  topLeft: ["coffee", "extras-coffee", "teas", "iced", "beers", "spirits"],
  topRight: ["sparkling", "rose", "whites", "reds"],
  bottomLeft: ["breakfast"],
  bottomRight: ["lunch"],
  fullWidth: ["extras"],
} as const;
