import { useState } from "react";
import type { CartItem } from "../types/cart.type";

export const useCart = (cartItems: CartItem[], onClearCart?: () => void) => {
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalHarga = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) return alert("🛒 Cart is still empty!");

    setIsProcessing(true);

    setTimeout(() => {
      setShowModal(true);
      onClearCart && onClearCart();
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsProcessing(false);
    window.location.href = "/";
  };

  return {
    showModal,
    isProcessing,
    totalHarga,
    handleCheckout,
    handleCloseModal,
  };
};
