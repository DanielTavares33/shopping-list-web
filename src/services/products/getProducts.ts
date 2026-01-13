import api from "@/services/api";
import { Product } from "@/types/api/product";

async function getProducts(): Promise<Product[]> {
  const response = await api.get<{ data: Product[] }>("/products");
  return response.data.data;
}

export { getProducts };