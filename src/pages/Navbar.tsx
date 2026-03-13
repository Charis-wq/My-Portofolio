export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)] px-8 py-3 shadow-xl ">
      <h1 className="font-bold text-2xl">
        Abdul <span className="text-[var(--color-body)]">Charis</span>
      </h1>
      <div className="flex text-right font-body gap-5 text-white text-md absolute right-8 top-4">
        <a href=""className="hover:text-[var(--color-accent)]">Abot</a>
        <a href=""className="hover:text-[var(--color-accent)]">Skils</a>
        <a href=""className="hover:text-[var(--color-accent)]">Project</a>
        <a href=""className="hover:text-[var(--color-accent)]">Contacts</a>
      </div>
    </nav>
  );
}
