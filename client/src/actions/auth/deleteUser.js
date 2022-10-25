import React, { useEffect, useState } from "react";
import axios from "axios";

export const deleteUser = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("auth"))}`,
      },
    });
  }, []);

  const deleteaccount = async (id) => {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API}/users/${id}`, config);
  };

  return deleteaccount;
};
