import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSideBar } from '@contexts/SideBarProvider';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';
import Register from '@components/ContentSideBar/Register/Register';

const sidebarVariants = {
    open: {
        x: 0,
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    closed: {
        x: '100%',
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
};

const overlayVariants = {
    open: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

const SideBar: React.FC = () => {
    const { isOpen, setIsOpen, type } = useSideBar();

    const handleToggle = () => {
        setIsOpen(false);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'cart':
                return <Cart />;
            case 'wishlist':
                return <WishList />;
            case 'register':
                return <Register />;

            default:
                return null;
        }
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <aside className="relative z-[1000]">
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-[#0000004d]bg-opacity-30"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        onClick={handleToggle}
                    />

                    {/* Sidebar */}
                    <motion.div
                        className="fixed top-0 right-0 w-92 h-screen py-5 px-[30px] bg-white shadow-md text-third text-sm flex flex-col z-[1001]"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                    >
                        <TfiClose
                            className="absolute top-[30px] -left-[50px] w-8 h-8 bg-white p-2 rounded-full text-title z-[1002] cursor-pointer hover:bg-[#e1e1e1]"
                            onClick={handleToggle}
                        />
                        {handleRenderContent()}
                    </motion.div>
                </aside>
            )}
        </AnimatePresence>
    );
};

export default SideBar;
