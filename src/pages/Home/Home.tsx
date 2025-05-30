import { productApi, type ProductsRequest } from '@api/productService';
import AdvanceHeading from '@components/AdvanceHeadline/AdvanceHeadline';
import Banner from '@components/Banner/Banner';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import Info from '@components/Info/Info';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import React, { useEffect, useState } from 'react';
const Home: React.FC = () => {
    const [listProducts, setListProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);

    const fetchProducts = async (query: ProductsRequest) => {
        try {
            setIsLoading(true);
            setIsError(null);
            const res = await productApi.getProducts(query);
            setListProducts(res.data.results);
        } catch (error: any) {
            setIsError(error.response?.data?.message || 'An error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const query: ProductsRequest = {
            current: 1,
            pageSize: 10
        };
        fetchProducts(query);
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeading
                title="Our best products"
                subTitle="don't miss super offers"
            />
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <HeadingListProducts
                        listProducts={listProducts.slice(0, 2)}
                    />
                    <PopularProduct
                        listProducts={listProducts.slice(
                            2,
                            listProducts.length
                        )}
                    />
                </>
            )}
            <SaleHomePage />
            <Footer />
        </>
    );
};

export default Home;
