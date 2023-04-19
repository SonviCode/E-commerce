export const localStorageSetItem =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const setElement = (element: string) => {
      if (action.type?.startsWith(element)) {
        const state = store.getState()[element];
        localStorage.setItem(element, JSON.stringify(state));
      }
    };

    setElement(action.type.split("/")[0]);
    return result;
  };

export const localStorageGetItem = () => {
  try {
    const favState = localStorage.getItem("favoris");
    const shopState = localStorage.getItem("shop");
    const historicState = localStorage.getItem("historic");

    return {
      favoris: favState ? JSON.parse(favState) : { value: [] },
      shop: shopState ? JSON.parse(shopState) : { value: [] },
      historic: historicState ? JSON.parse(historicState) : { value: [] },
    };
  } catch (e) {
    return undefined;
  }
};
