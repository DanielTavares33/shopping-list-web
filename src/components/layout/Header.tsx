import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ShoppingBasket } from "lucide-react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

export function Header() {
  const { getTotalItems } = useShoppingCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and App Name */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Shopping List</span>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>

          {/* Shopping Cart Icon with Badge */}
          <button className="relative">
            <ShoppingBasket className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
            {totalItems > 0 && (
              <Badge
                variant="default"
                className="absolute -right-2 -top-2 h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs"
              >
                {totalItems}
              </Badge>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
