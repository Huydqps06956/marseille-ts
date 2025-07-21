import axiosClient from './axiosClient';
export interface AuthRequest {
    username: string;
    password: string;
}
export interface AuthResponse {
    user: {
        _id: string;
        email: string;
        name: string;
    };
    access_token: string;
    refresh_token: string;
}

export const authApi = {
    login: (data: AuthRequest) => {
        return axiosClient.post<AuthResponse>('/auth/login', {
            username: data.username,
            password: data.password
        });
    },
    getProfile: () => {
        return axiosClient.get('/auth/profile');
    }
};
