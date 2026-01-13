import { useEffect, useState } from "react";
import { Category } from "@/types/api/category";
import { getCategories } from "@/services/categories/getCategories";

interface UseCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      setError(error as Error);
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error, refresh: fetchCategories };
}

export { useCategories };