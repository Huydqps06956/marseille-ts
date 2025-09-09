import Button from '@components/Button';
import { BsCart3 } from 'react-icons/bs';
import HeaderSideBar from '../components/HeaderSideBar';
import ListProductSideBar from '../components/ListProductSideBar';
import { useCurrency } from '@hooks/useCurrency';
import { useSideBar } from '@contexts/SideBarProvider';
import { useCart } from '@contexts/CartProvider';

const Cart = () => {
    const { cart, removeFromCart, loading } = useCart();
    const formatCurrency = useCurrency();
    const { setIsOpen } = useSideBar();

    return (
        <>
            <HeaderSideBar title={'CART'} icon={<BsCart3 size={24} />} />

            {cart.items.length == 0 ? (
                <div className="text-center">
                    <p className="mb-5 mt-4 text-base">
                        No products in the cart.
                    </p>
                    <Button
                        variant="outline"
                        className="rounded-sm text-xs px-8"
                        onClick={() => setIsOpen(false)}
                    >
                        RETURN TO SHOP
                    </Button>
                </div>
            ) : (
                <>
                    <ListProductSideBar
                        cart={cart}
                        removeFromCart={removeFromCart}
                        loading={loading}
                    />
                    <div className="w-full pt-5">
                        <div className="flex items-center justify-between mb-5 ">
                            <strong>Subtotal:</strong>
                            <span>
                                <p>{formatCurrency(cart?.total ?? 0)}</p>
                            </span>
                        </div>
                        <Button
                            className="rounded-sm py-3 px-6 hover-button-bg"
                            fullWidth
                        >
                            VIEW CART
                        </Button>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
