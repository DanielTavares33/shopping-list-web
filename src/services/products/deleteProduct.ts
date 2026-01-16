import api from "@/services/api";

async function deleteProduct(productId: number): Promise<void> {
  await api.delete(`/products/${productId}`);
}

export { deleteProduct };
