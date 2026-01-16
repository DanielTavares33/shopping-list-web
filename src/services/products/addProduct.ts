import api from "@/services/api";
import { Product } from "@/types/api/product";

interface AddProductRequest {
  name: string;
  category_id: number;
  default_unit: number;
}

async function addProduct(data: AddProductRequest): Promise<Product> {
  const response = await api.post<{ data: Product }>("/products", data);
  return response.data.data;
}

export { addProduct };
