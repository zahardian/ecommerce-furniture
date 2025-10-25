import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false); // Tutup menu kalau di HP diklik
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between bg-white px-4 rounded-b-lg">
          {/* KIRI: Logo */}
          <div className="flex-shrink-0">
            <FontAwesomeIcon icon={faCouch} />
          </div>

          {/* TENGAH (menu besar hanya tampil di desktop/tablet) */}
          <div className="hidden sm:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black/10"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black/10"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black/10"
            >
              Contact
            </button>
          </div>

          {/* KANAN: Cart + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-2xl text-black hover:text-blue-600 transition"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger (Hanya tampil di HP) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer sm:hidden text-2xl text-black hover:text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="sm:hidden  backdrop-blur-md px-4 py-3 space-y-2 shadow-md animate-slideDown">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="cursor-pointer block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/10"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
