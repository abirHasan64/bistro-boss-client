import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";
import { useEffect } from "react";

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // Log the user out and navigate to login if the request fails
          await logOut();
          navigate("/login");
        } else if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          const user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            // Get a new token if possible
            const newToken = await axios.post("/jwt", { email: user.email });
            localStorage.setItem("access-token", newToken.data.token);
            originalRequest.headers.Authorization = `Bearer ${newToken.data.token}`;
            return axiosSecure(originalRequest); // Retry the original request
          }
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};
export default useAxiosSecure;
