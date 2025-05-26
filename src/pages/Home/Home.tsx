import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import Info from '@components/Info/Info';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Info />
        </>
    );
};

export default Home;
