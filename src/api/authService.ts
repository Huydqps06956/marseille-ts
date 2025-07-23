import axiosClient from './axiosClient';
export interface LoginRequest {
    username: string;
    password: string;
}
export interface LoginResponse {
    user: User;
    access_token: string;
    refresh_token: string;
}

export const authApi = {
    login: (data: LoginRequest) => {
        return axiosClient.post<LoginResponse>('/auth/login', {
            username: data.username,
            password: data.password
        });
    },
    getProfile: (_id: string) => {
        return axiosClient.get<User>(`/users/${_id}`);
    }
};
