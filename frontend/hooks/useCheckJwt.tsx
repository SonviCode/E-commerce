import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkJwtFromLocalStorage } from "../utils/authUser";

const useCheckJwt = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkJwtFromLocalStorage(dispatch);
  }, [dispatch]);
};

export default useCheckJwt;
