import ProductItem from './ProductItem';

const ListProductSideBar = () => {
    return (
        <div
            className="h-full max-h-[100dvh] overflow-hidden overflow-y-auto"
            style={{ scrollbarGutter: 'stable' }}
        >
            <ProductItem />
        </div>
    );
};

export default ListProductSideBar;
