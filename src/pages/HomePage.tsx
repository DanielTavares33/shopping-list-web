import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/home/SearchBar";
import { CategoriesSection } from "@/components/home/CategoriesSection";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        <SearchBar />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
}
