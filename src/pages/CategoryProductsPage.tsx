import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { AddProductDialog } from "@/components/products/AddProductDialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { useProducts } from "@/hooks/productsHook";
import { useCategories } from "@/hooks/categoriesHook";
import { getCategoryIcon } from "@/lib/categoryIcons";

export function CategoryProductsPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { products, loading: productsLoading, refresh } = useProducts();
  const { categories } = useCategories();
  const [searchQuery, setSearchQuery] = useState("");

  // Find the current category
  const category = categories.find((c) => c.id === Number(categoryId));

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category_id === Number(categoryId));

    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [products, categoryId, searchQuery]);

  if (!category && !productsLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-8">
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">Category not found.</p>
            <Link to="/">
              <Button className="mt-4" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        {/* Back Button and Category Header */}
        <div className="mb-6 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{category && getCategoryIcon(category.name)}</span>
            <h1 className="text-3xl font-bold capitalize">{category?.name || "Loading..."}</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 w-full max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 text-base"
            />
          </div>
        </div>

        {/* Products Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Products</h2>
          {category && (
            <AddProductDialog
              categoryId={category.id}
              categoryName={category.name}
              onProductAdded={refresh}
            />
          )}
        </div>

        {/* Products Grid */}
        {productsLoading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="h-48 animate-pulse bg-muted" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">
              {searchQuery
                ? `No products found matching "${searchQuery}"`
                : "No products available in this category. Add your first product to get started!"}
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductDeleted={refresh}
                onProductUpdated={refresh}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
