import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-4 text-3xl font-bold">Shopping List App</h1>
        <Button variant="default">Add Item</Button>
      </div>
    </>
  )
}

export default App
