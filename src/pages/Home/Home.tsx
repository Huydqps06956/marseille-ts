import AdvanceHeading from '@components/AdvanceHeadline/AdvanceHeadline';
import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import Info from '@components/Info/Info';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeading
                title="Our best products"
                subTitle="don't miss super offers"
            />
            <HeadingListProducts />
        </>
    );
};

export default Home;
