export const amountPayement = (payment: number) => {
  return `${payment.toString().split("").slice(0, -2).join("")},${payment
    .toString()
    .split("")
    .slice(-2)
    .join("")}€`;
};
