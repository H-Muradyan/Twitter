import React, { useEffect, useState } from "react";
import axios from "axios";

export const update = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("auth"))}`,
      },
    });
  }, []);

  const changeData = async (data, id) => {
    return await axios.put(`${process.env.NEXT_PUBLIC_API}/users/${id}`, data, config);
  };

  return changeData;
};
