import axios from "axios";

// constants
import endpoint from "../constants/api";

const httpService = axios.create({
  baseURL: endpoint.baseUrl,
});

httpService.interceptors.response.use(
  (response) => response,
  (err) => {
    throw err;
  }
);

export default httpService;
