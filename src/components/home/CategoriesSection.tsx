import { useCategories } from "@/hooks/categoriesHook";
import { useProducts } from "@/hooks/productsHook";
import { CategoryCard } from "./CategoryCard";
import { AddCategoryDialog } from "@/components/categories/AddCategoryDialog";
import { Card } from "@/components/ui/card";

export function CategoriesSection() {
  const { categories, loading: categoriesLoading, error: categoriesError, refresh } = useCategories();
  const { products } = useProducts();

  // Calculate product count for each category
  const getCategoryProductCount = (categoryId: number) => {
    return products.filter((p) => p.category_id === categoryId).length;
  };

  if (categoriesLoading) {
    return (
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <AddCategoryDialog onCategoryAdded={refresh} />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="h-40 animate-pulse bg-muted" />
          ))}
        </div>
      </section>
    );
  }

  if (categoriesError) {
    return (
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <AddCategoryDialog onCategoryAdded={refresh} />
        </div>
        <Card className="p-6 text-center">
          <p className="text-destructive">Failed to load categories. Please try again later.</p>
        </Card>
      </section>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <AddCategoryDialog onCategoryAdded={refresh} />
        </div>
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No categories available. Add your first category to get started!</p>
        </Card>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <AddCategoryDialog onCategoryAdded={refresh} />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            productCount={getCategoryProductCount(category.id)}
            onCategoryDeleted={refresh}
            onCategoryUpdated={refresh}
          />
        ))}
      </div>
    </section>
  );
}
