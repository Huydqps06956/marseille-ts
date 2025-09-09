import { cartApi, type CartRequest } from '@api/cartService';
import Cookies from 'js-cookie';
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from 'react';
import { useStore } from './StoreProvider';

interface CartContextType {
    cart: Cart;
    loading: boolean;
    addToCart: (data: CartRequest) => Promise<Cart>;
    removeFromCart: (productId: string, size: string) => Promise<Cart>;
    refreshCart: () => Promise<void>;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Cart>({
        items: [],
        total: 0
    });
    const [loading, setLoading] = useState(false);
    const userInfo = useStore();
    const fetchCart = async () => {
        try {
            setLoading(true);
            if (!userInfo) {
                setCart({ items: [], total: 0 });
                return;
            }
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
            console.log(cart, 'first');
            setCart(response.data);
            console.log(cart, 'second');
            console.log(response.data, response);
            return response.data;
        } catch (error) {
            console.error('Error add to cart:', error);
            const emptyCart = { items: [], total: 0 };
            return emptyCart;
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (
        productId: string,
        size: string
    ): Promise<Cart> => {
        try {
            setLoading(true);
            const response = await cartApi.removeFromCart(productId, size);
            setCart(response.data);
            return response.data;
        } catch (error) {
            console.error('Error remove from cart:', error);
            const emptyCart = { items: [], total: 0 };
            return emptyCart;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [userInfo]);

    const value: CartContextType = {
        cart,
        loading,
        addToCart,
        removeFromCart,
        refreshCart: fetchCart
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

// Custom hook để sử dụng Cart Context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};
