import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import { Toaster } from "@/components/ui/sonner";
import { HomePage } from "@/pages/HomePage";
import { CategoryProductsPage } from "@/pages/CategoryProductsPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
