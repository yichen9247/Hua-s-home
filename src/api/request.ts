import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.defaults.timeout = 30000;

/**
 * 请求拦截
 */
axios.interceptors.request.use(
    (request): InternalAxiosRequestConfig<any> => {
        const token = localStorage.getItem("token");
        if (token) request.headers.Authorization = token;
        return request;
    },
    (error): any => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
axios.interceptors.response.use(
    (response): AxiosResponse<any, any, {}> => {
        return response;
    },
    (error): any => {
        return Promise.reject(error);
    }
)

export default axios;