import { cartApi } from '@api/cartService';
import { createContext, useContext, useState, type ReactNode } from 'react';
interface ISideBarContext {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    type: string;
    setType: (type: TSideBar) => void;
    handleGetCart: (userId: string, type: TSideBar) => void;
    cart: Cart;
}
interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext<ISideBarContext | undefined>(
    undefined
);

export const SideBarProvider: React.FC<SideBarProviderProps> = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [type, setType] = useState<TSideBar>('login');
    const [cart, setCart] = useState<Cart>({
        items: [],
        total: 0
    });
    const handleGetCart = async (userId: string, t: TSideBar) => {
        if (userId != '' && t === 'cart') {
            const res = await cartApi.getCart();
            setCart(res.data);
        }
    };

    const value: ISideBarContext = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetCart,
        cart
    };
    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};

export function useSideBar(): ISideBarContext {
    const context = useContext(SideBarContext);

    if (context === undefined) {
        throw new Error('useSideBar must be used within a SideBarProvider');
    }

    return context;
}
