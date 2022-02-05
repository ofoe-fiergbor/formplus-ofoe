import axios from "axios";
import { baseURL } from "../constants/texts";
import Response from "./Response";

const Request = (() => {
  const getHeaders = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return headers;
  };

  const request = (method, resource, body) => {
    const config = {
      baseURL,
      url: resource,
      headers: getHeaders(),
      withCredentials: false,
      method: method.toLowerCase(),
    };
    if (method === "GET" && body) config.params = body;
    else if (body) config.data = body;
    return axios(Object.freeze(config));
  };

  return {
    baseURL,
    get: async (resource, params) => Response(request("GET", resource, params)),
  };
})();

export default Request;
