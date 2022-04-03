import axios from "axios";

const axiosClient = axios.create({
    baseURL: '/api', // Using the same domain with current project.
    headers: {
        'Content-Type': 'application/json' 
    }
})

// Only get data from axios response.

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;