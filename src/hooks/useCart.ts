import { cartApi, type CartRequest } from '@api/cartService';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState<Cart>({
        items: [],
        total: 0
    });
    const [loading, setLoading] = useState(false);
    const userId = Cookies.get('user_id');

    const fetchCart = async () => {
        try {
            setLoading(true);
            const response = await cartApi.getCart();
            setCart(response.data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (data: CartRequest): Promise<Cart> => {
        try {
            setLoading(true);
            const response = await cartApi.addProductToCart(data);
            setCart(response.data);
            return response.data;
        } catch (error) {
            console.error('Error add to cart:', error);
            return {
                items: [],
                total: 0
            };
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (productId: string, size: string) => {
        try {
            setLoading(true);
            const response = await cartApi.removeFromCart(productId, size);
            setCart(response.data);

            return response.data;
        } catch (error) {
            console.error('Error remove from cart:', error);
            return {
                items: [],
                total: 0
            };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!userId) return;
        fetchCart();
    }, []);

    return {
        cart,
        loading,
        addToCart,
        refreshCart: fetchCart,
        removeFromCart
    };
};
