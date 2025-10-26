import type { Product } from "../types/app.type";

export interface Props {
  onAddToCart: (product: Product) => void;
}
