import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, ShoppingBasket, Calendar } from "lucide-react";

// Mock data for shopping lists
const mockShoppingLists = [
  {
    id: 1,
    name: "Weekly Groceries",
    createdAt: "2026-01-15",
    itemCount: 12,
    completed: false,
    items: ["Milk", "Bread", "Eggs", "Apples", "Chicken", "Rice"],
  },
  {
    id: 2,
    name: "Party Supplies",
    createdAt: "2026-01-14",
    itemCount: 8,
    completed: false,
    items: ["Chips", "Soda", "Pizza", "Ice Cream"],
  },
  {
    id: 3,
    name: "Holiday Shopping",
    createdAt: "2026-01-10",
    itemCount: 15,
    completed: true,
    items: ["Turkey", "Vegetables", "Wine", "Desserts"],
  },
];

export function ShoppingListPage() {
  const [lists] = useState(mockShoppingLists);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">My Shopping Lists</h1>
            <p className="text-muted-foreground">
              Manage and organize your shopping lists
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <Plus className="h-5 w-5" />
            Create New List
          </Button>
        </div>

        {/* Lists Grid */}
        {lists.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBasket className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-semibold">No Shopping Lists Yet</h3>
            <p className="mb-4 text-muted-foreground">
              Create your first shopping list to get started!
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Shopping List
            </Button>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lists.map((list) => (
              <Card
                key={list.id}
                className="group cursor-pointer transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2 flex items-center gap-2">
                        {list.name}
                        {list.completed && (
                          <Badge variant="secondary" className="text-xs">
                            Completed
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {new Date(list.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle delete
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Items</span>
                      <Badge variant="outline">{list.itemCount}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {list.items.slice(0, 3).map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {list.items.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{list.items.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {!list.completed && (
                      <Button size="sm" className="flex-1">
                        Shop Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
