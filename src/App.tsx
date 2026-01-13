import { useCategories } from "@/hooks/categoriesHook"
import { useProducts } from "./hooks/productsHook";

function App() {
  const { categories } = useCategories();
  const { products } = useProducts();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-4 text-3xl font-bold">Shopping List App</h1>
        <div className="mb-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-2">
              <span className="text-lg">{category.name}</span>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="mb-2">
              <span className="text-lg">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
