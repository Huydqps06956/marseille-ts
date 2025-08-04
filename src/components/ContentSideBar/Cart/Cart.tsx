import Button from '@components/Button';
import { BsCart3 } from 'react-icons/bs';
import HeaderSideBar from '../components/HeaderSideBar';
import ListProductSideBar from '../components/ListProductSideBar';
import { useSideBar } from '@contexts/SideBarProvider';
import { useCurrency } from '@hooks/useCurrency';

const Cart = () => {
    const { cart } = useSideBar();
    const formatCurrency = useCurrency();

    return (
        <>
            <HeaderSideBar title={'CART'} icon={<BsCart3 size={24} />} />
            <ListProductSideBar cart={cart} />
            <div className="w-full pt-5">
                <div className="flex items-center justify-between mb-5">
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
    );
};

export default Cart;
