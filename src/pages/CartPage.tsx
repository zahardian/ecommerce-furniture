import { useCart } from "../hooks/useCart";
import type { CartItem, CartActions } from "../types/cart.type";

interface Props extends CartActions {
  cartItems: CartItem[];
}

const CartPage: React.FC<Props> = ({
  cartItems,
  onRemove,
  onDecrease,
  onIncrease,
  onClearCart,
}) => {
  const {
    showModal,
    isProcessing,
    totalHarga,
    handleCheckout,
    handleCloseModal,
  } = useCart(cartItems, onClearCart);

  return (
    <div className="pt-24 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">🛍️ Order Summary</h2>

      {isProcessing ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700">
            Your order is being processed...
          </p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-5">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-700 font-medium mt-1">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="cursor-pointer w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="cursor-pointer w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  >
                    +
                  </button>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="cursor-pointer ml-4 text-red-500 hover:text-red-700 transition"
                    title="Delete item"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t pt-6 text-right">
            <p className="text-xl font-semibold mb-4">
              Total: ${totalHarga.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              ✅ Order Confirmed!
            </h3>
            <p className="text-gray-700 mb-4">
              Thank you for your purchase. Your order has been successfully
              placed and is being processed.
            </p>
            <p className="font-semibold text-lg mb-6">
              Total Payment: ${totalHarga.toFixed(2)}
            </p>
            <button
              onClick={handleCloseModal}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
