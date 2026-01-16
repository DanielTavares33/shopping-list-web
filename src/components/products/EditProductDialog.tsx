import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import { updateProduct } from "@/services/products/updateProduct";
import type { Product } from "@/types/api/product";

interface EditProductDialogProps {
  product: Product;
  onProductUpdated?: () => void;
}

export function EditProductDialog({ product, onProductUpdated }: EditProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState(product.name);
  const [defaultUnit, setDefaultUnit] = useState(String(product.default_unit));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update local state when product prop changes
  useEffect(() => {
    setProductName(product.name);
    setDefaultUnit(String(product.default_unit));
  }, [product.name, product.default_unit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName.trim()) {
      setError("Product name is required");
      return;
    }

    if (productName.trim() === product.name && Number(defaultUnit) === product.default_unit) {
      setOpen(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await updateProduct(product.id, {
        name: productName.trim(),
        category_id: product.category_id,
        default_unit: Number(defaultUnit),
      });
      setOpen(false);
      toast.success("Product updated successfully!");

      // Notify parent component to refresh products
      if (onProductUpdated) {
        onProductUpdated();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update product";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form when dialog closes
      setProductName(product.name);
      setDefaultUnit(String(product.default_unit));
      setError(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-12 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Pencil className="h-4 w-4 text-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Update the product details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-product-name">Product Name</Label>
              <Input
                id="edit-product-name"
                placeholder="e.g., Fresh Apples, Whole Milk, Bread"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                disabled={loading}
                autoFocus
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-default-unit">Default Unit</Label>
              <Input
                id="edit-default-unit"
                placeholder="e.g., 1"
                value={defaultUnit}
                onChange={(e) => setDefaultUnit(e.target.value)}
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground">
                The default quantity for this product
              </p>
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
