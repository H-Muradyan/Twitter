import React, { useEffect } from "react";
import axios from "axios";

export const me = () => {
  let config = "";

  useEffect(() => {
    config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("auth"))}`,
      },
    };
  }, []);

  const getUserData = async () => await axios.get(`${process.env.NEXT_PUBLIC_API}/me`, config);

  return getUserData;
};
