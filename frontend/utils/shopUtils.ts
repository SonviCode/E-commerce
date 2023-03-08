import { productsItem } from "../types/product";

export const subtotal = (shopData: any) => {
  const result: number = shopData.reduce(
    (sum: number, { price }: any) => sum + price,
    0
  );

  return result;
};
