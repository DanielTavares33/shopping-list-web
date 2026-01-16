import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { getProductIcon } from "@/lib/productIcons";
import { EditProductDialog } from "./EditProductDialog";
import { DeleteProductDialog } from "./DeleteProductDialog";
import type { Product } from "@/types/api/product";

interface ProductCardProps {
  product: Product;
  onProductDeleted?: () => void;
  onProductUpdated?: () => void;
}

export function ProductCard({ product, onProductDeleted, onProductUpdated }: ProductCardProps) {
  const { addToCart, incrementQuantity, decrementQuantity, getItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(product.id);
  const isInCart = quantity > 0;
  const icon = getProductIcon(product.name);

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <EditProductDialog
        product={product}
        onProductUpdated={onProductUpdated}
      />
      <DeleteProductDialog
        productId={product.id}
        productName={product.name}
        onProductDeleted={onProductDeleted}
      />
      <div className="flex flex-col p-4">
        {/* Product Icon */}
        <div className="mb-3 text-center text-5xl">{icon}</div>

        {/* Product Name */}
        <h3 className="mb-3 text-center text-lg font-semibold capitalize">{product.name}</h3>

        {/* Unit Info */}
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Unit: {product.default_unit}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto">
          {!isInCart ? (
            <Button
              onClick={() => addToCart(product.id)}
              className="w-full"
              variant="default"
            >
              Add to Shopping List
            </Button>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <Button
                onClick={() => decrementQuantity(product.id)}
                variant="outline"
                size="icon"
                className="h-10 w-10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold">{quantity}</span>
              <Button
                onClick={() => incrementQuantity(product.id)}
                variant="outline"
                size="icon"
                className="h-10 w-10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
