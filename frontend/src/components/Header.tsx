import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Clothing Store
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/catalog"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Catalog
          </Link>

          <Link
            to="/profile"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Profile
          </Link>

          <Link
            to="/cart"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Cart
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm md:hidden"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={closeMenu} className="text-sm font-medium text-gray-700">
              Home
            </Link>

            <Link to="/catalog" onClick={closeMenu} className="text-sm font-medium text-gray-700">
              Catalog
            </Link>

            <Link to="/profile" onClick={closeMenu} className="text-sm font-medium text-gray-700">
              Profile
            </Link>

            <Link to="/cart" onClick={closeMenu} className="text-sm font-medium text-gray-700">
              Cart
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}