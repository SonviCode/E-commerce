import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setNotif } from "../../../store/features/slice/notifSlice";

const ErrorModal = ({ errorName }: { errorName: string }) => {
  const [load, setLoad] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      dispatch(setNotif(""));
    }, 2000);
  }, [dispatch]);

  return (
    <div
      className={`
        fixed shadow-sm rounded-lg top-24 right-1/2 translate-x-1/2 py-5 px-10 border-2 bg-red-600 z-20`}
    >
      <h2 className="text-white">
        {errorName} 
      </h2>
    </div>
  );
};

export default ErrorModal;
