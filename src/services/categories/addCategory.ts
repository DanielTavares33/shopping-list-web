import api from "@/services/api";
import { Category } from "@/types/api/category";

interface AddCategoryRequest {
  name: string;
}

async function addCategory(data: AddCategoryRequest): Promise<Category> {
  const response = await api.post<{ data: Category }>("/categories", data);
  return response.data.data;
}

export { addCategory };
