import axios from "axios";

export const register = async (user) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, user);
};
