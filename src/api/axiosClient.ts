import axios, { type AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
    baseURL:
        import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(`Error: ${error}`);
    }
);

axiosClient.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response?.status === 401) {
            //Xử lý token hết hạn
            localStorage.removeItem('token');
            //window.location.href('/login')
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
