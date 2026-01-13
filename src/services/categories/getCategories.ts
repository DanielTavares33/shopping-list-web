import api from "@/services/api";
import { Category } from "@/types/api/category";

async function getCategories(): Promise<Category[]> {
  const response = await api.get<{ data: Category[] }>("/categories");
  return response.data.data;
}

export { getCategories };