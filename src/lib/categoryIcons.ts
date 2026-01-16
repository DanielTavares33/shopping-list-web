/**
 * Maps category names to emoji icons
 * Returns a default icon if category is not found
 * Uses fuzzy matching for better name recognition
 */
export function getCategoryIcon(categoryName: string): string {
  const normalizedName = categoryName.toLowerCase().trim();

  // Produce & Vegetables
  if (normalizedName.includes("produce") || normalizedName.includes("vegetable")) return "🥬";
  if (normalizedName.includes("fruit")) return "🍎";
  if (normalizedName.includes("organic")) return "🌱";

  // Dairy & Eggs
  if (normalizedName.includes("dairy")) return "🥛";
  if (normalizedName.includes("egg")) return "🥚";
  if (normalizedName.includes("cheese")) return "🧀";
  if (normalizedName.includes("milk")) return "🥛";

  // Bakery
  if (normalizedName.includes("baker")) return "🍞";
  if (normalizedName.includes("bread")) return "🍞";
  if (normalizedName.includes("pastry") || normalizedName.includes("pastries")) return "🥐";

  // Meat & Protein
  if (normalizedName.includes("meat") || normalizedName.includes("butcher")) return "🥩";
  if (normalizedName.includes("poultry") || normalizedName.includes("chicken")) return "🍗";
  if (normalizedName.includes("seafood") || normalizedName.includes("fish")) return "🐟";
  if (normalizedName.includes("deli")) return "🧀";

  // Snacks & Treats
  if (normalizedName.includes("snack")) return "🍿";
  if (normalizedName.includes("chip")) return "🥨";
  if (normalizedName.includes("candy") || normalizedName.includes("chocolate")) return "🍫";
  if (normalizedName.includes("cookie") || normalizedName.includes("biscuit")) return "🍪";

  // Frozen
  if (normalizedName.includes("frozen")) return "🧊";
  if (normalizedName.includes("ice cream")) return "🍦";

  // Beverages
  if (normalizedName.includes("beverage") || normalizedName.includes("drink")) return "🥤";
  if (normalizedName.includes("coffee")) return "☕";
  if (normalizedName.includes("tea")) return "🍵";
  if (normalizedName.includes("juice")) return "🧃";
  if (normalizedName.includes("soda") || normalizedName.includes("pop")) return "🥤";
  if (normalizedName.includes("water")) return "💧";
  if (normalizedName.includes("wine")) return "🍷";
  if (normalizedName.includes("beer") || normalizedName.includes("ale")) return "🍺";
  if (normalizedName.includes("alcohol") || normalizedName.includes("spirit")) return "🥃";

  // Pantry & Staples
  if (normalizedName.includes("pantry") || normalizedName.includes("staple")) return "🥫";
  if (normalizedName.includes("canned") || normalizedName.includes("can")) return "🥫";
  if (normalizedName.includes("jar")) return "🫙";
  if (normalizedName.includes("pasta")) return "🍝";
  if (normalizedName.includes("rice")) return "🍚";
  if (normalizedName.includes("grain") || normalizedName.includes("cereal")) return "🌾";
  if (normalizedName.includes("noodle")) return "🍜";
  if (normalizedName.includes("flour") || normalizedName.includes("baking")) return "🍞";

  // Condiments & Sauces
  if (normalizedName.includes("condiment") || normalizedName.includes("sauce")) return "🧂";
  if (normalizedName.includes("spice") || normalizedName.includes("seasoning")) return "🌶️";
  if (normalizedName.includes("oil") || normalizedName.includes("vinegar")) return "🫒";

  // Health & Wellness
  if (normalizedName.includes("health") || normalizedName.includes("wellness")) return "🥗";
  if (normalizedName.includes("vitamin") || normalizedName.includes("supplement")) return "💊";
  if (normalizedName.includes("pharmacy") || normalizedName.includes("medicine")) return "💊";
  if (normalizedName.includes("gluten free") || normalizedName.includes("gluten-free")) return "🌾";
  if (normalizedName.includes("vegan") || normalizedName.includes("plant-based")) return "🥗";

  // Baby & Kids
  if (normalizedName.includes("baby")) return "🍼";
  if (normalizedName.includes("kid") || normalizedName.includes("child")) return "🧸";

  // Pet Supplies
  if (normalizedName.includes("pet")) return "🐾";
  if (normalizedName.includes("dog")) return "🐕";
  if (normalizedName.includes("cat")) return "🐈";

  // Household
  if (normalizedName.includes("cleaning") || normalizedName.includes("cleaner")) return "🧹";
  if (normalizedName.includes("paper") || normalizedName.includes("tissue")) return "🧻";
  if (normalizedName.includes("personal care") || normalizedName.includes("hygiene")) return "🧴";
  if (normalizedName.includes("laundry") || normalizedName.includes("detergent")) return "🧺";

  // Misc
  if (normalizedName.includes("flower") || normalizedName.includes("floral")) return "💐";
  if (normalizedName.includes("gift")) return "🎁";
  if (normalizedName.includes("seasonal") || normalizedName.includes("holiday")) return "🎄";

  // Default fallback
  return "🛒";
}
