import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CiBag1, CiHeart } from 'react-icons/ci';
import { IoIosGitCompare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

const ProductItem: React.FC<any> = ({ name, price, images }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col">
            <motion.div
                className="bg-white w-full h-auto  relative overflow-hidden "
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
            <div className="mt-2 flex-1 flex flex-col justify-between">
                <h2 className="capitalize text-title">{name}</h2>
                <p className="text-third text-[14px] font-light">
                    <span>$</span>
                    {price}
                </p>
            </div>
        </div>
    );
};

export default ProductItem;
