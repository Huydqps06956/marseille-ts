import Button from '@components/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { SlHeart } from 'react-icons/sl';
import ListProductSideBar from '../components/ListProductSideBar';
const WishList = () => {
    return (
        <>
            <HeaderSideBar title="WISHLIST" icon={<SlHeart size={24} />} />

            <ListProductSideBar />

            <div className="w-full pt-5 ">
                <Button
                    className="rounded-sm py-3 px-6 hover-button-bg mb-3"
                    fullWidth
                >
                    VIEW WISHLIST
                </Button>

                <Button
                    className="rounded-sm py-3 px-6 "
                    fullWidth
                    variant="outline"
                >
                    ADD ALL TO CART
                </Button>
            </div>
        </>
    );
};

export default WishList;
