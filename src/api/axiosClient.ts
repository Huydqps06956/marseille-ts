import axios, { type AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

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
        const token = Cookies.get('access_token');
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
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            const refreshToken = Cookies.get('refresh_token');
            originalRequest._retry = true;
            if (!refreshToken) return Promise.reject(error);
            try {
                const res = await axiosClient.post('/auth/refresh-token', {
                    refreshToken
                });
                const newAccessToken = res.data.access_token;
                Cookies.set('access_token', newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosClient(originalRequest);
            } catch (error) {
                Cookies.remove('access_token');
                Cookies.remove('refresh_token');
                return Promise.reject(error);
            }
        }
    }
);

export default axiosClient;
