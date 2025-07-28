import Axios from "axios";
import { useRouter } from "next/router";

const useLocalAxios = () => {
  const router = useRouter();

  const BASE_URL = "http://localhost:3003";

  const init = () => {
    const headers = {
      "x-flarelane-lang": router.locale,
    };

    const axiosInstance = Axios.create({
      baseURL: BASE_URL,
      headers,
    });

    return axiosInstance;
  };

  const axios = init();

  return axios;
};

export default useLocalAxios;
