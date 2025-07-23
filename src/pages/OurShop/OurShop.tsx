import Header from '@components/Header/Header';
import MainLayout from '@components/MainLayout';
import Banner from './components/OurShopBanner';
import { Link, useNavigate } from 'react-router-dom';

const OurShop = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <MainLayout className="pt-22 pb-[10px] px-4 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <Link to="/" className=" text-[#888]">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <h1>Shop</h1>
                </div>
                <span
                    onClick={() => navigate(-1)}
                    className=" text-[#888] cursor-pointer"
                >
                    &lt;Return to previous page
                </span>
            </MainLayout>

            <MainLayout className="px-4">
                <Banner />
            </MainLayout>
        </>
    );
};

export default OurShop;
