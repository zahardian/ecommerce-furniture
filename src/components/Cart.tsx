// import type { CartItem } from "../App";

// interface Props {
//   cartItems: CartItem[];
//   onRemove: (id: number) => void;
//   onDecrease: (id: number) => void;
//   onIncrease: (id: number) => void;
// }

// const Cart: React.FC<Props> = ({
//   cartItems,
//   onRemove,
//   onDecrease,
//   onIncrease,
// }) => {
//   const totalHarga = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       alert("Cart is still empty!");
//     } else {
//       alert("Thank you! Your order is being processed 🛍️");
//     }
//   };

//   return (
//     <div className="border-t pt-4 mt-6">
//       <h2 className="text-xl font-semibold mb-2">🛒 Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Cart is still empty.</p>
//       ) : (
//         <ul className="space-y-3">
//           {cartItems.map((item) => (
//             <li
//               key={item.id}
//               className="border p-3 rounded-lg flex items-center justify-between shadow-sm"
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="font-medium">{item.name}</h3>
//                   <p className="text-gray-600">
//                     ${item.price.toLocaleString()} × {item.quantity}
//                   </p>
//                   <p className="font-semibold">
//                     Total: ${(item.price * item.quantity).toLocaleString()}.00
//                   </p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <button
//                       onClick={() => onDecrease(item.id)}
//                       className="bg-yellow-500 text-white px-2 py-1 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => onIncrease(item.id)}
//                       className="bg-green-500 text-white px-2 py-1 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => onRemove(item.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {cartItems.length > 0 && (
//         <div className="mt-6 text-right">
//           <p className="font-semibold text-lg mb-2">
//             Total: ${totalHarga.toLocaleString()}.00
//           </p>
//           <button
//             onClick={handleCheckout}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
