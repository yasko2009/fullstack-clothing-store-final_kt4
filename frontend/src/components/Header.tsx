import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive ? "text-black" : "text-gray-500 hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Clothing Store
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/catalog" className={navLinkClass}>
            Catalog
          </NavLink>

          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>

          <NavLink to="/cart" className={navLinkClass}>
            Cart ({cartCount})
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-800 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/catalog"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Catalog
            </NavLink>

            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Profile
            </NavLink>

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Cart ({cartCount})
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}