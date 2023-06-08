import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setNotif } from "../../../store/features/slice/notifSlice";

const NotifModal = ({ notifMessage }: { notifMessage: string }) => {
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
      className={`${
        load ? "translate-y-20" : ""
      } ease duration-300 fixed shadow-sm rounded-lg top-8 right-10 p-2 border-2 bg-white z-20`}
    >
      {
        <h2>
          {notifMessage} <FontAwesomeIcon icon={fs.faCheck} />
        </h2>
      }
    </div>
  );
};

export default NotifModal;
