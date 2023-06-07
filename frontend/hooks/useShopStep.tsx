import { Dispatch, SetStateAction, useEffect } from "react";
import { Delivery, indicator } from "../types/shop";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { User } from "../types/user";
import { productsData } from "../types/product";
import { checkProperties } from "../utils/shopUtils";

const useShopStep = ({
  numberIndicator,
  setIsAbleNextStep,
}: {
  numberIndicator: indicator[];
  setIsAbleNextStep: Dispatch<SetStateAction<boolean>>;
}) => {
  const delivery: Delivery = useSelector((state: RootState) => state.delivery);
  const user: User = useSelector((state: RootState) => state.user.value);
  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );

  useEffect(() => {
    switch (true) {
      case numberIndicator[3].actif:
        setIsAbleNextStep(false);
        break;
      case numberIndicator[2].actif &&
        checkProperties(user?.location!) &&
        delivery.value.deliveryName !== "":
        setIsAbleNextStep(true);
        break;
      case user &&
        Object.keys(user!).length > 0 &&
        numberIndicator[1].actif &&
        !numberIndicator[2].actif:
        setIsAbleNextStep(true);
        break;
      case shopData.length > 0 &&
        numberIndicator[0].actif &&
        !numberIndicator[1].actif:
        setIsAbleNextStep(true);
        break;
      default:
        setIsAbleNextStep(false);
    }
  }, [numberIndicator, shopData, user, setIsAbleNextStep, delivery]);
};

export default useShopStep;
