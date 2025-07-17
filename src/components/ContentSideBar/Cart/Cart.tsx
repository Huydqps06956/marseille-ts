import { BsCart3 } from 'react-icons/bs';
import HeaderSideBar from '../components/HeaderSideBar';
import ListProductSideBar from '../components/ListProductSideBar';
import Button from '@components/Button';

const Cart = () => {
    return (
        <>
            <HeaderSideBar title={'CART'} icon={<BsCart3 size={24} />} />
            <ListProductSideBar />
            <div className="w-full pt-5">
                <div className="flex items-center justify-between mb-5">
                    <strong>Subtotal:</strong>
                    <span>
                        <p>$ 99.99</p>
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
