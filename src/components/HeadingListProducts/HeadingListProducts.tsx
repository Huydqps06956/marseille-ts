import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import MainLayout from '@components/MainLayout';
import ProductItem from '@components/ProductItem/ProductItem';
import type React from 'react';

export interface IListProducts {
    listProducts: Product[];
}
const HeadingListProducts: React.FC<IListProducts> = ({ listProducts }) => {
    return (
        <MainLayout>
            <div className="grid grid-cols-2 justify-between gap-[15px]">
                <CountdownBanner />
                <div className=" grid grid-cols-2 gap-5">
                    {listProducts.map((product: any) => (
                        <ProductItem key={product._id} {...product} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadingListProducts;
