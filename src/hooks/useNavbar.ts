import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { INames } from "../types/navbar.type";

const names: INames[] = [
  { name: "Home", parameter: "home" },
  { name: "About", parameter: "about" },
  { name: "Products", parameter: "products" },
  { name: "Contact", parameter: "contact" },
];

const useNavbar = () => {
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

  return { names, menuOpen, setMenuOpen, scrollToSection };
};

export default useNavbar;
