import Button from '@components/Button';
import ProductItem from '@components/ProductItem/ProductItem';
import Spinner from '@components/Spiner';
import { useOurShop } from '@contexts/OurShopProvider';

const ProductList = () => {
    const { products, isShowGrid, loading, total, handleLoadMoreProducts } =
        useOurShop();
    return (
        <>
            <div
                className={`${
                    isShowGrid
                        ? //Grid View
                          'grid grid-cols-4 gap-4'
                        : //ListView
                          'flex flex-col gap-[30px] justify-center'
                }  mt-4`}
            >
                {products.map((product: Product) => (
                    <ProductItem
                        key={product._id}
                        {...product}
                        isHomePage={false}
                        isShowGrid={isShowGrid}
                    />
                ))}
            </div>
            {products.length < total && (
                <div className="text-center ">
                    <Button
                        disabled={loading}
                        variant="outline"
                        className="mt-10 mb-5 px-6 py-3 text-xs/tight rounded-[5px] relative"
                        onClick={handleLoadMoreProducts}
                    >
                        <span
                            className={`${loading ? 'invisible' : 'visible'}`}
                        >
                            LOAD MORE PRODUCTS
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center">
                            {loading && <Spinner />}
                        </span>
                    </Button>
                </div>
            )}
        </>
    );
};

export default ProductList;
