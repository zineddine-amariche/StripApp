import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_STRIPE

const api = async (obj) => {
  const res = await axios.post(API_URL, obj);
  return res;
};

const paymentService = {
  api,
};
export default paymentService;
