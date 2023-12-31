import { HomeIcon, SearchIcon, LibraryIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div></div>
          <nav className="space-y-5">
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <SearchIcon />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <LibraryIcon />
              Your Library
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
