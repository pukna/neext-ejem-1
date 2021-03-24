/**
 * Created by chalosalvador on 17/2/21
 */

import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
});

// api.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
