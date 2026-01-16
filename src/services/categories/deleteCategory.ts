import api from "@/services/api";

async function deleteCategory(categoryId: number): Promise<void> {
  await api.delete(`/categories/${categoryId}`);
}

export { deleteCategory };
