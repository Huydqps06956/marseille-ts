import axiosClient from './axiosClient';
export interface CartRequest {
    productId: string;
    size: string;
    quantity: number;
}
export interface CartResponse {
    items: ProductInCart[];
    total: number;
}

export const cartApi = {
    getCart: () => {
        return axiosClient.get<CartResponse>('/cart');
    },
    addProductToCart: (data: CartRequest) => {
        return axiosClient.post<CartResponse>(`/cart/add`, data);
    },
    removeFromCart: (productId: string, size: string) => {
        return axiosClient.delete<CartResponse>(`/cart/${productId}/${size}`);
    }
};
