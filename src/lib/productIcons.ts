/**
 * Maps product names to emoji icons
 * Returns a default icon if product is not found
 * Uses fuzzy matching to handle various product name formats
 */
export function getProductIcon(productName: string): string {
  const normalizedName = productName.toLowerCase().trim();

  // Fruits
  if (normalizedName.includes("apple")) return "🍎";
  if (normalizedName.includes("banana")) return "🍌";
  if (normalizedName.includes("orange")) return "🍊";
  if (normalizedName.includes("grape")) return "🍇";
  if (normalizedName.includes("strawberr")) return "🍓";
  if (normalizedName.includes("watermelon")) return "🍉";
  if (normalizedName.includes("lemon")) return "🍋";
  if (normalizedName.includes("peach")) return "🍑";
  if (normalizedName.includes("cherry")) return "🍒";
  if (normalizedName.includes("pear")) return "🍐";
  if (normalizedName.includes("pineapple")) return "🍍";
  if (normalizedName.includes("mango")) return "🥭";
  if (normalizedName.includes("kiwi")) return "🥝";
  if (normalizedName.includes("avocado")) return "🥑";

  // Vegetables
  if (normalizedName.includes("tomato")) return "🍅";
  if (normalizedName.includes("carrot")) return "🥕";
  if (normalizedName.includes("broccoli")) return "🥦";
  if (normalizedName.includes("lettuce") || normalizedName.includes("salad")) return "🥬";
  if (normalizedName.includes("potato")) return "🥔";
  if (normalizedName.includes("onion")) return "🧅";
  if (normalizedName.includes("garlic")) return "🧄";
  if (normalizedName.includes("pepper") || normalizedName.includes("bell pepper")) return "🫑";
  if (normalizedName.includes("cucumber")) return "🥒";
  if (normalizedName.includes("corn")) return "🌽";
  if (normalizedName.includes("eggplant")) return "🍆";
  if (normalizedName.includes("mushroom")) return "🍄";
  if (normalizedName.includes("spinach") || normalizedName.includes("kale")) return "🥬";

  // Dairy
  if (normalizedName.includes("milk")) return "🥛";
  if (normalizedName.includes("cheese")) return "🧀";
  if (normalizedName.includes("butter")) return "🧈";
  if (normalizedName.includes("yogurt") || normalizedName.includes("yoghurt")) return "🥛";
  if (normalizedName.includes("cream")) return "🥛";
  if (normalizedName.includes("egg")) return "🥚";

  // Bakery
  if (normalizedName.includes("bread")) return "🍞";
  if (normalizedName.includes("bagel")) return "🥯";
  if (normalizedName.includes("croissant")) return "🥐";
  if (normalizedName.includes("donut") || normalizedName.includes("doughnut")) return "🍩";
  if (normalizedName.includes("cake")) return "🍰";
  if (normalizedName.includes("cookie")) return "🍪";
  if (normalizedName.includes("muffin")) return "🧁";
  if (normalizedName.includes("pie")) return "🥧";

  // Meat & Protein
  if (normalizedName.includes("chicken")) return "🍗";
  if (normalizedName.includes("beef") || normalizedName.includes("steak")) return "🥩";
  if (normalizedName.includes("pork") || normalizedName.includes("bacon")) return "🥓";
  if (normalizedName.includes("sausage") || normalizedName.includes("hot dog")) return "🌭";
  if (normalizedName.includes("ham")) return "🍖";
  if (normalizedName.includes("turkey")) return "🍗";

  // Seafood
  if (normalizedName.includes("fish") || normalizedName.includes("salmon") || normalizedName.includes("tuna")) return "🐟";
  if (normalizedName.includes("shrimp") || normalizedName.includes("prawn")) return "🦐";
  if (normalizedName.includes("crab")) return "🦀";
  if (normalizedName.includes("lobster")) return "🦞";
  if (normalizedName.includes("squid") || normalizedName.includes("octopus")) return "🦑";

  // Beverages
  if (normalizedName.includes("coffee")) return "☕";
  if (normalizedName.includes("tea")) return "🍵";
  if (normalizedName.includes("juice")) return "🧃";
  if (normalizedName.includes("soda") || normalizedName.includes("cola")) return "🥤";
  if (normalizedName.includes("water")) return "💧";
  if (normalizedName.includes("wine")) return "🍷";
  if (normalizedName.includes("beer")) return "🍺";
  if (normalizedName.includes("cocktail") || normalizedName.includes("drink")) return "🍹";

  // Snacks
  if (normalizedName.includes("chip") || normalizedName.includes("crisp")) return "🍟";
  if (normalizedName.includes("popcorn")) return "🍿";
  if (normalizedName.includes("pretzel")) return "🥨";
  if (normalizedName.includes("chocolate")) return "🍫";
  if (normalizedName.includes("candy") || normalizedName.includes("sweet")) return "🍬";
  if (normalizedName.includes("ice cream") || normalizedName.includes("icecream")) return "🍦";
  if (normalizedName.includes("popsicle")) return "🍡";

  // Grains & Pasta
  if (normalizedName.includes("rice")) return "🍚";
  if (normalizedName.includes("pasta") || normalizedName.includes("spaghetti")) return "🍝";
  if (normalizedName.includes("noodle")) return "🍜";
  if (normalizedName.includes("cereal")) return "🥣";
  if (normalizedName.includes("oat") || normalizedName.includes("granola")) return "🥣";

  // Canned & Packaged
  if (normalizedName.includes("soup")) return "🥫";
  if (normalizedName.includes("can") || normalizedName.includes("tin")) return "🥫";
  if (normalizedName.includes("jar")) return "🫙";

  // Condiments & Sauces
  if (normalizedName.includes("ketchup")) return "🍅";
  if (normalizedName.includes("mustard")) return "🌭";
  if (normalizedName.includes("mayo") || normalizedName.includes("mayonnaise")) return "🥪";
  if (normalizedName.includes("sauce")) return "🥫";
  if (normalizedName.includes("oil") || normalizedName.includes("olive oil")) return "🫒";
  if (normalizedName.includes("vinegar")) return "🍶";
  if (normalizedName.includes("salt")) return "🧂";
  if (normalizedName.includes("pepper") && normalizedName.includes("black")) return "🧂";
  if (normalizedName.includes("spice") || normalizedName.includes("seasoning")) return "🌶️";

  // Frozen
  if (normalizedName.includes("frozen")) return "🧊";
  if (normalizedName.includes("pizza")) return "🍕";

  // Nuts & Seeds
  if (normalizedName.includes("peanut")) return "🥜";
  if (normalizedName.includes("almond") || normalizedName.includes("nut")) return "🌰";

  // Prepared Foods
  if (normalizedName.includes("sandwich")) return "🥪";
  if (normalizedName.includes("burger") || normalizedName.includes("hamburger")) return "🍔";
  if (normalizedName.includes("taco")) return "🌮";
  if (normalizedName.includes("burrito")) return "🌯";
  if (normalizedName.includes("salad")) return "🥗";

  // Default icon for unmatched products
  return "🛒";
}
