import ProductItem from './ProductItem';
interface Props {
    cart: Cart | null;
}
const ListProductSideBar: React.FC<Props> = ({ cart }) => {
    return (
        <div
            className="h-full max-h-[100dvh] overflow-hidden overflow-y-auto"
            style={{ scrollbarGutter: 'stable' }}
        >
            {cart?.items.map(item => (
                <ProductItem key={item._id} product={item} />
            ))}
        </div>
    );
};

export default ListProductSideBar;
