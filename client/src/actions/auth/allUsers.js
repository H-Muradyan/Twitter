import React, { useEffect } from "react";
import axios from "axios";

export const allUsers = () => {
  let config = "";

  useEffect(() => {
    config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("auth"))}`,
      },
    };
  }, []);

  const getAllUsers = async () => await axios.get(`${process.env.NEXT_PUBLIC_API}/users`, config);


  return getAllUsers;
};

