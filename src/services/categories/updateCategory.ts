import api from "@/services/api";
import { Category } from "@/types/api/category";

interface UpdateCategoryRequest {
  name: string;
}

async function updateCategory(categoryId: number, data: UpdateCategoryRequest): Promise<Category> {
  const response = await api.put<{ data: Category }>(`/categories/${categoryId}`, data);
  return response.data.data;
}

export { updateCategory };
