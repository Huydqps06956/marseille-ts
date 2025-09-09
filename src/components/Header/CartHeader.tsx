import { useCart } from '@contexts/CartProvider';
import type React from 'react';
import { BsCart3 } from 'react-icons/bs';

interface CartHeaderProps {
    onClick: (type: TSideBar) => void;
}
const CartHeader: React.FC<CartHeaderProps> = ({ onClick }) => {
    const { cart } = useCart();
    const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <div className="relative">
            <BsCart3
                size={20}
                className="cursor-pointer"
                onClick={() => onClick('cart')}
            />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

export default CartHeader;
