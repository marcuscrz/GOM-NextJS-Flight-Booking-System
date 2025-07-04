"use client";

import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

const axiosApiClient = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken") || "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosApiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export const apiClient = axiosApiClient;

export const api = {
  get: <T>(url: string, params?: any) => axiosApiClient.get<T>(url, { params }),
  post: <T>(url: string, data: any) => axiosApiClient.post<T>(url, data),
  put: <T>(url: string, data: any) => axiosApiClient.put<T>(url, data),
  delete: <T>(url: string) => axiosApiClient.delete<T>(url),
};
