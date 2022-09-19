import axios, { AxiosRequestConfig } from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const PublicApi = axios.create();

PublicApi.interceptors.request.use(function (config: AxiosRequestConfig) {
  if (config?.headers) {
    config.headers.language = "tr";
    config.headers["region-id"] = "5fa703e35db5b776ac915536";
  }

  return config;
});

export { PublicApi };
