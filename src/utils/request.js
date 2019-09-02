import axios from "axios";

// create an axios instance
const service = axios.create({
    baseURL: process.env.API_HOST, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
//request interceptor
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.common["Authorization"] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
service.interceptors.response.use(res => {
    return res.data
}, error => {
})

export default service;