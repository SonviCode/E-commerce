import { SHOPPING_CART } from "../constants/Constants";
import { removeItemFav } from "../store/features/slice/favorisSlice";
import { setNotif } from "../store/features/slice/notifSlice";
import { setShopData } from "../store/features/slice/shopSlice";
import { productsItem } from "../types/product";
import { indicator } from "../types/shop";

export const subtotal = (shopData: any): number => {
  const result: number = shopData.reduce(
    (
      sum: number,
      { price, counterShop }: { price: number; counterShop: number }
    ) => sum + price * counterShop,
    0
  );

  return Number(result.toFixed(2));
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
  } else {
    newProductObj = { ...product };
  }
  newProductObj.counterShop += nb;

  dispatch(setShopData(newProductObj));
  dispatch(setNotif(SHOPPING_CART));
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

export const prevStepShop = (
  numberIndicator: indicator[],
  setNumberIndicator: any
) => {
  let newIndicator: indicator[] = [...numberIndicator];

  for (let i = 0; i < 3; i++) {
    if (numberIndicator[i].actif && numberIndicator[i + 1].actif == false) {
      newIndicator[i].actif = false;
    } else if (i + 1 == 3) {
      newIndicator[i + 1].actif = false;
    }
  }

  setNumberIndicator(newIndicator);
};

export const nextStepShop = (
  numberIndicator: indicator[],
  setNumberIndicator: any
) => {
  let newIndicator: indicator[] = [...numberIndicator];

  for (let i = 3; i > 0; i--) {
    if (numberIndicator[i].actif == false && numberIndicator[i - 1].actif) {
      newIndicator[i].actif = true;
    }
  }

  setNumberIndicator(newIndicator);
};

export const checkProperties = (obj: any): boolean => {
  for (const key in obj) {
    console.log(key);

    if (obj[key] == null || obj[key] == "") return false;
  }

  return true;
};

export const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
