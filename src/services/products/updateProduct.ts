import api from "@/services/api";
import { Product } from "@/types/api/product";

interface UpdateProductRequest {
  name: string;
  category_id: number;
  default_unit: number;
}

async function updateProduct(productId: number, data: UpdateProductRequest): Promise<Product> {
  const response = await api.put<{ data: Product }>(`/products/${productId}`, data);
  return response.data.data;
}

export { updateProduct };
