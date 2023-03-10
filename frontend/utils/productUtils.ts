import { productsData, productsItem } from "../types/product";
import { Dispatch, SetStateAction } from "react";
import {
  removeItemFav,
  setFavData,
} from "../store/features/slice/favorisSlice";
import { setNotif } from "../store/features/slice/notifSlice";

export const ArrayAvg = (myArray: number[]) => {
  let i = 0,
    summ = 0;
  while (i < myArray.length) {
    summ = summ + myArray[i++];
  }
  return parseFloat((summ / myArray.length).toFixed(1));
};

export const starInArray = (nb: number) => {
  let avgStar: number[] = [];

  for (let i = 0; i < 5; i++) {
    if (nb - 1 >= 0) {
      avgStar.push(1);
    } else if (nb - 0.5 >= 0) {
      avgStar.push(5);
    } else {
      avgStar.push(0);
    }

    nb = nb - 1;
  }

  return avgStar;
};

export const toggleHeart = (
  el: productsItem,
  favData: productsItem[],
  dispatch: any
) => {
  if (favData.some((fav: any) => fav.name == el.name)) {
    dispatch(removeItemFav(el));
  } else {
    dispatch(setNotif("favoris"));
    dispatch(setFavData(el));
  }

  // const favorisArray: productsItem[] = JSON.parse(
  //   localStorage.getItem("favoris")!
  // );

  // favorisArray && favorisArray.push(el);

  // if (el.like == true) {
  //   const favorisArrayFilter = favorisArray.filter(
  //     (fav) => fav.name !== el.name
  //   );
  //   console.log(favorisArrayFilter);
  //   localStorage.setItem("favoris", JSON.stringify(favorisArrayFilter));
  // } else {
  //   if (favorisArray) {
  //     localStorage.setItem("favoris", JSON.stringify(favorisArray));
  //   } else {
  //     localStorage.setItem("favoris", JSON.stringify([el]));
  //   }
  // }
};

export const capitalize = (s: string | string[] | undefined) =>
  s && s[0].toUpperCase() + s.slice(1);

export const handleDate = (dateFromDb: string) => {
  const date = new Date(dateFromDb);
  const formattedDate = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

export const changeCounterProduct = (
  nb: number,
  counter: number,
  setCounter: any
) => {
  if (counter == 1 && nb == -1) {
    return;
  }
  setCounter(counter + nb);
};

// --------------------FILTER------------------------
export const ascendingPrice = (product: Array<Object>) => {
  product.sort(function (a: any, b: any) {
    return a.price - b.price;
  });
};

export const decreasingPrice = (product: Array<Object>) => {
  product.sort(function (a: any, b: any) {
    return b.price - a.price;
  });
};

// export const largestPrice = (product: productsData) => {

//   let largest = product[0].price;

//   for (let i = 0; i < product.length; i++) {
//     if (largest < product[i].price) {
//       largest = product[i].price;
//     }
//   }

//   return largest;
// };

export const handleChangePrice = (
  price: any,
  productData: productsData,
  setProduct: Dispatch<SetStateAction<productsData>>
) => {
  const percentage: number = 150;

  const maxPrice: number = (percentage * price) / 100;

  setProduct([...productData].filter((el) => el.price <= maxPrice));
};
