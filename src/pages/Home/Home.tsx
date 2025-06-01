import AdvanceHeading from '@components/AdvanceHeadline/AdvanceHeadline';
import Banner from '@components/Banner/Banner';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import Info from '@components/Info/Info';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useProducts } from '@hooks/useProducts';
import React, { useMemo } from 'react';
const Home: React.FC = () => {
    const { products, loading, error } = useProducts({
        current: 1,
        pageSize: 10
    });

    const { headingProducts, popularProducts } = useMemo(
        () => ({
            headingProducts: products.slice(0, 2),
            popularProducts: products.slice(2)
        }),
        [products]
    );

    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeading
                title="Our best products"
                subTitle="don't miss super offers"
            />
            {loading ? (
                <p className="text-center py-10">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500 py-10">{error}</p>
            ) : (
                <>
                    <HeadingListProducts listProducts={headingProducts} />
                    <PopularProduct listProducts={popularProducts} />
                </>
            )}
            <SaleHomePage />
            <Footer />
        </>
    );
};

export default Home;
