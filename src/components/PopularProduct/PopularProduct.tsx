import React from 'react';
import MainLayout from '@components/MainLayout';
import ProductItem from '@components/ProductItem/ProductItem';
import type { IListProducts } from '@components/HeadingListProducts/HeadingListProducts';

const PopularProduct: React.FC<IListProducts> = ({ listProducts }) => {
    return (
        <MainLayout>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {listProducts.map((product: any) => (
                    <ProductItem key={product._id} {...product} />
                ))}
            </div>
        </MainLayout>
    );
};

export default PopularProduct;
