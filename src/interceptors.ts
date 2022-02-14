import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

function tokenInterceptor(config: AxiosRequestConfig) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
}

function logRequest(config: AxiosRequestConfig) {
  console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
  return config;
}

axios.interceptors.request.use(tokenInterceptor);
axios.interceptors.request.use(logRequest);

function logResponse(response: AxiosResponse) {
  console.log(`Response: ${response.status}`);
  console.table(response.data);
  return response;
}

function logError(error: AxiosError) {
  if (error.response == null) {
    alert("Server does not respond! Please try again latter!");
  }

  if (error.response?.status > 500) {
    alert("SERVER IS DOWN! PLEASE TRY AGAIN LATTER!");
  }

  return Promise.reject(error);
}

axios.interceptors.response.use(logResponse, logError);
