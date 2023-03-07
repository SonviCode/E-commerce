import { format } from "path";

export const formatNumberPhone = (number: number) => {
  const numberInString = number + "";

  const formatPhone = numberInString
    .replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5")
    .split("-");

  // format.map((el: number, i: any) => el);

  console.log(formatPhone);

  return formatPhone;
};
