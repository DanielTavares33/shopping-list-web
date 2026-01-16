export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="container px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shopping List. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
