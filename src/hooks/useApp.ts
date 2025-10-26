import { useState } from "react";
import type {
  Product,
  CartItem,
  BlogPost,
  IFooterLink,
} from "../types/app.type";

const condition: IFooterLink[] = [
  { name: "Term & Condition" },
  { name: "Policy" },
  { name: "Map" },
];

const about: IFooterLink[] = [
  { name: "About Us" },
  { name: "What We Do" },
  { name: "FAQ Page" },
  { name: "Contact Us" },
];

const information: IFooterLink[] = [
  { name: "Help & Contact Us" },
  { name: "Returns & Refunds" },
  { name: "Online Stores" },
  { name: "Terms & Conditions" },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Unique products in 2023.",
    date: "2022-11-27",
    author: "Admin",
    category: "deco",
    image: "/blog-1.jpg",
    alt: "Unique products that will impress your home in 2023.",
  },
  {
    id: 2,
    title: "Navy Blue & White Striped Area Rugs",
    date: "2022-11-25",
    author: "Admin",
    category: "deco",
    image: "/blog-2.jpg",
    alt: "Navy Blue & White Striped Area Rugs",
  },
  {
    id: 3,
    title: "Furniex White Coated Staircase Floating",
    date: "2022-11-18",
    author: "Admin",
    category: "deco",
    image: "/blog-3.jpg",
    alt: "Furniex White Coated Staircase Floating",
  },
];

const useApp = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bisa diganti dengan API call atau logic lain
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleDecreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleIncreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    email,
    setEmail,
    handleSubmit,
    condition,
    about,
    information,
    blogPosts,
  };
};

export default useApp;
