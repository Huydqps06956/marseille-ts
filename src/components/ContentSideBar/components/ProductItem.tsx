import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSideBar } from '@contexts/SideBarProvider';
import { useCurrency } from '@hooks/useCurrency';
interface Props {
    product: ProductInCart;
}

const ProductItem: React.FC<Props> = ({ product }) => {
    const [isHover, setIsHover] = useState(false);
    const { type } = useSideBar();
    const formatCurrency = useCurrency();

    return (
        <motion.div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="mt-5 py-5 px-3 relative overflow-hidden flex items-start justify-center gap-5 hover:bg-[#f7f7f7] transition-all duration-200 ease-in-out"
        >
            <img
                className="w-[70px] object-cover"
                src={product.primaryImage}
                alt={product.productName}
            />
            <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={isHover ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-2 right-2 cursor-pointer"
            >
                <IoCloseOutline size={24} />
            </motion.div>
            <div className="flex items-start justify-center mb-2 flex-col overflow-hidden">
                <h4 className="text-[15px]/[1.4] pr-6 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.productName}
                </h4>

                {type === 'cart' && (
                    <>
                        <p className="text-[#9e9e9e] mt-1 mb-2">
                            Size: {product.size}
                        </p>
                        <p>
                            quantity: {product.quantity} x {''}
                            {formatCurrency(product.price)}
                        </p>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default ProductItem;
