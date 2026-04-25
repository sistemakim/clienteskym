export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-8 text-[11px] uppercase tracking-[0.16em] text-ink/55 sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} HCE</span>
        <span>Todo en un solo lugar ✦</span>
      </div>
    </footer>
  );
}
