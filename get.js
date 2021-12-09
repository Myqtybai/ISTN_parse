import axios from "axios";
export const get = async (uri) => {
  const { data } = await axios.get(uri);
  return data;
};
