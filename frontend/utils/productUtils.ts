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

export const toggleHeart = (el: any) => {
  el.like = !el.like;
};
