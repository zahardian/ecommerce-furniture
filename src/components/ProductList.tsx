import type { Product } from "../App";

interface Props {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ onAddToCart }) => {
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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-bold">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base text-gray-700 font-medium truncate">
                  {product.name}
                </h3>
                <p className="mt-1 text-base sm:text-lg font-semibold text-gray-900">
                  ${product.price.toLocaleString()}.00
                </p>
                <button
                  onClick={() => onAddToCart(product)}
                  className="cursor-pointer mt-2 sm:mt-3 w-full bg-blue-500 text-white py-1.5 sm:py-2 rounded hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
