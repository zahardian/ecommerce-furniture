import useProduct from "../hooks/useProduct";
import type { Props } from "../types/product.type";

const ProductList: React.FC<Props> = ({ onAddToCart }) => {
  const { products } = useProduct();

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
