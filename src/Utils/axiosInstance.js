import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5500/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// AxiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle the 401 error here
//       console.log(
//         "Unauthorized request - redirecting to login or ignoring error."
//       );
//       // Optionally, clear user data, redirect, or show a custom message.
//     }
//     return Promise.reject(error);
//   }
// );

export default AxiosInstance;
