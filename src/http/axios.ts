import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter()
const fetchInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  timeout: 5 * 60 * 1000 // 请求超时时间
});
//请求拦截器
fetchInstance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: AxiosError) => {
    //对请求错误做些处理
    return Promise.reject(error);
  }
);

//响应拦截器
fetchInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response && response.status === 200) {
      if (response?.data?.code === 'B0401') {
        router.push('/login');
        return
      }
      const data = response.data;
      data.response = response;
      return data;
    }
    //对响应数据处理
    return response;
  },
  function (error) {
   
    if (error.response && error.response.status === 401) {
      router.push('/login');
      
      return false;
    }
    if (error.response && error.response.status === 404) {
      return false;
    }
    //对响应错误 处理
    return Promise.reject(error);
  }
);
export { fetchInstance as Fetch };
