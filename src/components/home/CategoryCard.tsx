import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { EditCategoryDialog } from "@/components/categories/EditCategoryDialog";
import { DeleteCategoryDialog } from "@/components/categories/DeleteCategoryDialog";
import { Link } from "react-router-dom";
import type { Category } from "@/types/api/category";

interface CategoryCardProps {
  category: Category;
  productCount?: number;
  onCategoryDeleted?: () => void;
  onCategoryUpdated?: () => void;
}

export function CategoryCard({ category, productCount, onCategoryDeleted, onCategoryUpdated }: CategoryCardProps) {
  const icon = getCategoryIcon(category.name);

  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group relative cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:scale-105">
        <EditCategoryDialog
          category={category}
          onCategoryUpdated={onCategoryUpdated}
        />
        <DeleteCategoryDialog
          categoryId={category.id}
          categoryName={category.name}
          productCount={productCount}
          onCategoryDeleted={onCategoryDeleted}
        />
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {/* Icon */}
          <div className="mb-3 text-5xl">{icon}</div>

          {/* Category Name */}
          <h3 className="mb-2 text-lg font-semibold capitalize">{category.name}</h3>

          {/* Product Count Badge */}
          {productCount !== undefined && productCount > 0 && (
            <Badge variant="secondary" className="mt-1">
              {productCount} {productCount === 1 ? "item" : "items"}
            </Badge>
          )}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </Card>
    </Link>
  );
}
