type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};
export function calculateSubtotal(cart: CartLine[]): CartLineWithSubtotal[] {
  const cartToUseSubtotal = cart.map( (line) => {
    return {
      ...line,
      subtotal: line.price * line.quantity
    }
  });
  return cartToUseSubtotal;
}