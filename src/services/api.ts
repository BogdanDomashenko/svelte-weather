import axios from "axios";
import { config as globalConfig } from "../config";

export const api = axios.create({
  baseURL: globalConfig.api,

});

api.interceptors.request.use((config) => {
  config.params = { ...config.params, appid: globalConfig.apiKey }
  return config;
})