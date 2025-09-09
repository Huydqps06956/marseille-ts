import type { CartRequest } from '@api/cartService';
import Button from '@components/Button';
import Spinner from '@components/Spiner';
import { useSideBar } from '@contexts/SideBarProvider';
import { useCurrency } from '@hooks/useCurrency';
import { useToast } from '@hooks/useToastify';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { CiBag1, CiHeart } from 'react-icons/ci';
import { IoIosGitCompare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

interface ProductItemI extends Product {
    isHomePage?: boolean;
    isShowGrid?: boolean;
    loading: boolean;
    addToCart: (data: CartRequest) => Promise<Cart>;
}

const ProductItem: React.FC<ProductItemI> = ({
    name,
    price,
    images,
    size,
    _id,
    isHomePage = true,
    isShowGrid = true,
    loading,
    addToCart
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [sizeChoose, setSizeChoose] = useState(size?.[0]?.name || '');
    const [isFirst, setIsFirst] = useState(true);
    const { type, setType, setIsOpen } = useSideBar();
    const toast = useToast();
    const formatCurrency = useCurrency();
    const userId = Cookies.get('user_id');
    const handleSizeClick = (name: string) => {
        setSizeChoose(name);
        setIsFirst(false);
    };
    const handleClearSize = () => setSizeChoose('');

    // const handleAddToCart = async () => {
    //     setIsLoading(true);
    //     if (!userId) {
    //         setIsOpen(true);
    //         type !== 'login' && setType('login');
    //         return toast.warning('Please login to add product to cart!');
    //     }
    //     if (!sizeChoose) {
    //         return toast.warning('Please choose size!');
    //     }

    //     const data = {
    //         productId: _id,
    //         quantity: 1,
    //         size: sizeChoose
    //     };
    //     try {
    //         await cartApi.addProductToCart(data);
    //         setType('cart');
    //         handleGetCart(userId, 'cart');
    //         setIsOpen(true);
    //         toast.success('add product to cart sucsessfully!');
    //         setIsLoading(false);
    //     } catch (error: any) {
    //         toast.error(error);
    //         setIsLoading(false);
    //     }
    // };

    const handleAddToCart = async () => {
        if (!userId) {
            setIsOpen(true);
            type !== 'login' && setType('login');
            return toast.warning('Please login to add product to cart!');
        }
        if (!sizeChoose) {
            return toast.warning('Please choose size!');
        }

        const data = {
            productId: _id,
            quantity: 1,
            size: sizeChoose
        };

        addToCart(data);
        toast.success('add product to cart sucsessfully!');
        setType('cart');
        setIsOpen(true);
    };

    return (
        <div
            className={`flex ${isShowGrid ? 'flex-col' : 'items-center gap-5'}`}
        >
            <motion.div
                className={`bg-white w-full h-auto  relative overflow-hidden ${
                    isShowGrid ? '' : 'shrink-0 grow-0 basis-[35%]'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Default Image */}
                <img
                    src={images[0]}
                    alt="Default image"
                    className=" w-full h-full object-cover"
                />

                {/* Hover Image */}
                <motion.img
                    src={images[1]}
                    alt="Hover image"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        display: isHovered ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                />

                <motion.div
                    className="absolute bottom-[10px] right-[10px] flex flex-col"
                    initial={{
                        opacity: 0,
                        display: 'none',
                        right: '-20px'
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        display: isHovered ? 'inline-flex' : 'none',
                        right: isHovered ? '10px' : '-20px'
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div className="inline-flex justify-center items-center relative h-10 w-10 bg-white cursor-pointer group">
                        <CiBag1 size={20} />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[.15] transition-opacity duration-300"></div>
                    </div>
                    <div className="inline-flex justify-center items-center relative h-10 w-10 bg-white cursor-pointer group">
                        <CiHeart size={20} />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[.15] transition-opacity duration-300"></div>
                    </div>
                    <div className="inline-flex justify-center items-center relative h-10 w-10 bg-white cursor-pointer group">
                        <IoIosGitCompare size={20} />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[.15] transition-opacity duration-300"></div>
                    </div>
                    <div className="inline-flex justify-center items-center relative h-10 w-10 bg-white cursor-pointer group">
                        <IoEyeOutline size={20} />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[.15] transition-opacity duration-300"></div>
                    </div>
                </motion.div>
            </motion.div>
            <div
                className={`mt-2 flex-1 flex flex-col ${
                    isShowGrid ? '' : 'items-start'
                } ${!isHomePage && 'text-center'}`}
            >
                {!isHomePage && (
                    <div className="flex  items-center justify-center gap-2 mb-3">
                        {size?.map(item => (
                            <div
                                key={item._id}
                                className={`text-[10px]  text-title border p-1 leading-[1] min-w-5 hover:border-title cursor-pointer transition-all duration-200 ease-out
                                ${
                                    sizeChoose === item.name
                                        ? 'border-title'
                                        : 'border-[#e1e1e1]'
                                }`}
                                onClick={() => handleSizeClick(item.name!)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
                <AnimatePresence>
                    {sizeChoose && !isFirst && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                                opacity: 0,
                                y: 20
                            }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <button
                                className="text-xs text-[#222] cursor-pointer mb-1 transitin-all duration-200 ease-out"
                                onClick={handleClearSize}
                            >
                                clear
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <h2 className="capitalize text-title ">{name}</h2>
                <p
                    className={` text-[14px] font-light ${
                        !isHomePage ? 'text-third ' : 'text-[#888]'
                    }`}
                >
                    {formatCurrency(price)}
                </p>
                <div className="flex-1">
                    {!isHomePage && (
                        <Button
                            disabled={sizeChoose == '' || loading}
                            className="mt-3 text-xs/3 rounded-sm py-[10px] px-[30px] hover-button-bg relative"
                            onClick={handleAddToCart}
                        >
                            <span
                                className={`${
                                    loading ? 'invisible' : 'visible'
                                }`}
                            >
                                {sizeChoose ? 'ADD TO CART' : 'SELECT OPTIONS'}
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                {loading && <Spinner />}
                            </span>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
