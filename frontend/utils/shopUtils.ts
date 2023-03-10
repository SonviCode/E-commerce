import { removeItemFav } from "../store/features/slice/favorisSlice";
import { setNotif } from "../store/features/slice/notifSlice";
import { setShopData } from "../store/features/slice/shopSlice";
import { productsItem } from "../types/product";
import { indicator } from "../types/shop";

export const subtotal = (shopData: any) => {
  const result: number = shopData.reduce(
    (
      sum: number,
      { price, counterShop }: { price: number; counterShop: number }
    ) => sum + price * counterShop,
    0
  );

  return result;
};

export const addToShopCart = (
  product: productsItem,
  dispatch: any,
  shopData: productsItem[],
  counter?: number
) => {
  const nb: number = counter ? counter : 1;

  let newProductObj: productsItem;

  if (shopData.some((e) => e.name == product.name)) {
    const i = shopData.findIndex((e) => e.name == product.name);
    newProductObj = { ...shopData[i] };
    console.log("if");
  } else {
    console.log("else");

    newProductObj = { ...product };
  }
  newProductObj.counterShop += nb;

  console.log(newProductObj);

  dispatch(setShopData(newProductObj));
  dispatch(setNotif("panier"));
};

export const changeCounterShop = (
  nb: number,
  el: productsItem,
  dispatch: any
) => {
  if (el.counterShop == 1 && nb == -1) {
    return;
  }

  const newProductObj = { ...el };

  newProductObj.counterShop += nb;

  dispatch(setShopData(newProductObj));
};

export const removeItem = (fav: productsItem, dispatch: any) => {
  dispatch(removeItemFav(fav));
};

export const rollBackShop = (
  numberIndicator: indicator[],
  setNumberIndicator: any
) => {
  let newIndicator: indicator[] = [...numberIndicator];

  for (let i = 3; i > 0; i--) {
    if (numberIndicator[i].actif) {
      newIndicator[i].actif = false;
    }
  }

  setNumberIndicator(newIndicator);
};
