import { productsData, productsItem } from "../types/product";

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

export const toggleHeart = (el: productsItem) => {
  el.like = !el.like;
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
