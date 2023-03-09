import { removeItemFav } from "../store/features/slice/favorisSlice";
import { setNotif } from "../store/features/slice/notifSlice";
import { setShopData } from "../store/features/slice/shopSlice";
import { productsItem } from "../types/product";

export const subtotal = (shopData: any) => {
  const data = [];

  for (let i = 0; i < shopData.length; i++) {
    let oneShop = shopData[i][0];
    data.push(oneShop);
  }

  const result: number = data.reduce(
    (sum: number, { price }: any) => sum + price,
    0
  );

  return result;
};

export const addToShopCart = (
  product: productsItem,
  dispatch: any,
  counter?: number
) => {
  let nbOfProduct = counter ? counter : 1;

  dispatch(setShopData([product, nbOfProduct]));
  dispatch(setNotif("panier"));
};

export const removeItem = (fav: productsItem, dispatch: any) => {
  dispatch(removeItemFav(fav));
};
