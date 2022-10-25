import React, { useEffect, useState } from "react";
import axios from "axios";

export const postTweet = () => {
  const [config, setConfig] = useState();

  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("auth"))}`,
      },
    });
  }, []);

  const postText = async (data) => {
    console.log(config);
    return await axios.post(`${process.env.NEXT_PUBLIC_API}/tweet`, data, config);
  };

  return postText;
};
