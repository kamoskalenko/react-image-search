import axios from "axios";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (page, query) => {
  const URL = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${accessKey}&page=${page}&per_page=12`;
  const { data } = await axios.get(URL);
  return data;
};
