export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <p>&copy; {currentYear} Portfolio Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
