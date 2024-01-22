import axios from "axios";

const API_URL = JSON.stringify(import.meta.env.VITE_REACT_API_BASE_URL);

const api = async (obj) => {
  const res = await axios.post(API_URL, obj);
  return res;
};

const serviceUpdateUserInfo = {
  api,
};
export default serviceUpdateUserInfo;
