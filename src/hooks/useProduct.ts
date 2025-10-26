import type { Product } from "../types/app.type";

const useProduct = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Brown Minimalist Armchair",
      price: 80,
      image: "/products-1.jpg",
    },
    {
      id: 2,
      name: "Green Modern Lounge Chair",
      price: 105,
      image: "/products-2.jpg",
    },
    {
      id: 3,
      name: "Gray Nordic Accent Chair",
      price: 74,
      image: "/products-3.jpg",
    },
    {
      id: 4,
      name: "Blue Modern ArmChair",
      price: 76,
      image: "/products-4.jpg",
    },
    {
      id: 5,
      name: "Beige Minimalist ArmChair",
      price: 72,
      image: "/products-5.jpg",
    },
    {
      id: 6,
      name: "Light Gray Modern Chair",
      price: 70,
      image: "/products-6.jpg",
    },
    {
      id: 7,
      name: "Round Wooden Coffe Table",
      price: 85,
      image: "/products-7.jpg",
    },
    {
      id: 8,
      name: "White Minimalist Chair",
      price: 65,
      image: "/product-10.jpg",
    },
    {
      id: 9,
      name: "Wooden Matte Cup Set",
      price: 15,
      image: "/product-19.jpg",
    },
    {
      id: 10,
      name: "Oak Spice Container",
      price: 17,
      image: "/product-18.jpg",
    },
    {
      id: 11,
      name: "Nordic Mini Bowl Set",
      price: 18,
      image: "/product-17.jpg",
    },
    {
      id: 12,
      name: "Stone Texture Vase",
      price: 23,
      image: "/product-16.jpg",
    },
    {
      id: 13,
      name: "Folded Ceramic Cups",
      price: 22,
      image: "/product-15.jpg",
    },
    {
      id: 14,
      name: "Matte Black Teapot",
      price: 20,
      image: "/product-14.jpg",
    },
    {
      id: 15,
      name: "Round Wooden Tray",
      price: 15,
      image: "/product-11.jpg",
    },
    {
      id: 16,
      name: "Minimalist Coffee Table",
      price: 45,
      image: "/product-12.jpg",
    },
  ];

  return { products };
};

export default useProduct;
