import { productsItem } from "../types/product";

export const contains = (state: any, action: any) => {
  const result: boolean = state.value.some((product: productsItem) => {
    return JSON.stringify(action.payload.name) === JSON.stringify(product.name);
  });

  return result;
};

export const filterOneItemByName = (state: any, action: any) => {
  const result: boolean = (state.value = state.value.filter(
    (product: productsItem) => product.name !== action.payload.name
  ));

  return result;
};
