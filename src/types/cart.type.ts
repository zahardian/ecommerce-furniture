// src/types/cart.types.ts

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartActions {
  onRemove: (id: number) => void;
  onDecrease: (id: number) => void;
  onIncrease: (id: number) => void;
  onClearCart?: () => void;
}
