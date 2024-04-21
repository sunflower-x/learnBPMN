import axios from "axios";

const http = axios.create({
  // baseURL: "api",
  timeout: 1000,
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 发送请求前需要做什么
    return config;
  },
  (error) => {
    // 发送请求出现异常
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据处理
    const res = response.data;

    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    // 对响应错误处理
    return Promise.reject(error);
  }
);

export default http;
