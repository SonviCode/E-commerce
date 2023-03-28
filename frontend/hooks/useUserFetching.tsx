import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { User } from "../types/user";
import { URL_GETUSER } from "../constants/Constants";
import { setUser } from "../store/features/slice/userSlice";

const useUserFetching = () => {
  const dispatch = useDispatch();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === true) {
      axios
        .get<User>(
          URL_GETUSER + localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!),
          {
            headers: {
              Authorization: localStorage.getItem(
                process.env.NEXT_PUBLIC_USER_TOKEN!
              ),
            },
          }
        )
        .then((res) => {
          delete res.data.password;
          dispatch(setUser(res.data));
        })
        .catch(() => localStorage.clear());
    }
    console.log("test")

    return () => {
      effectRan.current = true;
    };
  }, [dispatch]);

};

export default useUserFetching;
