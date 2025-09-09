import ProductItem from './ProductItem';
interface Props {
    cart: Cart;
    removeFromCart: (id: string, size: string) => Promise<Cart>;
    loading: boolean;
}
const ListProductSideBar: React.FC<Props> = ({
    cart,
    removeFromCart,
    loading
}) => {
    return (
        <div
            className="h-full max-h-[100dvh] overflow-hidden overflow-y-auto"
            style={{ scrollbarGutter: 'stable' }}
        >
            {cart?.items.map(item => (
                <ProductItem
                    key={item._id}
                    product={item}
                    removeFromCart={removeFromCart}
                    loading={loading}
                />
            ))}
        </div>
    );
};

export default ListProductSideBar;
