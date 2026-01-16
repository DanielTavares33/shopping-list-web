import { useState } from "react";
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
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { addProduct } from "@/services/products/addProduct";

interface AddProductDialogProps {
  categoryId: number;
  categoryName: string;
  onProductAdded?: () => void;
}

export function AddProductDialog({
  categoryId,
  categoryName,
  onProductAdded,
}: AddProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [defaultUnit, setDefaultUnit] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName.trim()) {
      setError("Product name is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await addProduct({
        name: productName.trim(),
        category_id: categoryId,
        default_unit: Number(defaultUnit),
      });
      setProductName("");
      setDefaultUnit("");
      setOpen(false);
      toast.success("Product added successfully!");

      // Notify parent component to refresh products
      if (onProductAdded) {
        onProductAdded();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to add product";
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
      setProductName("");
      setDefaultUnit("");
      setError(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="h-5 w-5" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Add a new product to the <span className="font-semibold capitalize">{categoryName}</span> category.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product-name">Product Name</Label>
              <Input
                id="product-name"
                placeholder="e.g., Fresh Apples, Whole Milk, Bread"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                disabled={loading}
                autoFocus
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="default-unit">Default Unit</Label>
              <Input
                id="default-unit"
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
              {loading ? "Adding..." : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
