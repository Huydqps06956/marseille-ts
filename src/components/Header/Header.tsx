import Logo from '@assets/images/logo.png';
import { boxIcons } from '@constants/header/boxicon';
import { dataMenus } from '@constants/header/menu';
import { useSideBar } from '@contexts/SideBarProvider';
import { useScrollHandling } from '@hooks/useScrollHandling';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { SlHeart, SlReload } from 'react-icons/sl';
import BoxIcon from './BoxIcon/BoxIcon';
import CartHeader from './CartHeader';
import Menu from './Menu/Menu';

const Header = () => {
    const leftMenus = useMemo(() => dataMenus.slice(0, 3), []);
    const rightMenus = useMemo(() => dataMenus.slice(3), []);

    const controls = useAnimation();
    const [isFixed, setIsFixed] = useState(false);
    const { scrollPosition } = useScrollHandling();
    const { setIsOpen, setType, type } = useSideBar();
    const handleOpenSideBar = (newType: TSideBar) => {
        type !== newType && setType(newType);
        setIsOpen(true);
    };

    useEffect(() => {
        if (scrollPosition >= 80 && !isFixed) {
            controls
                .start({
                    y: -100,
                    transition: { duration: 0.03 },
                    visibility: 'visible'
                })
                .then(() => {
                    controls.start({
                        y: 0
                    });
                    setIsFixed(true);
                });
        } else if (scrollPosition === 0) {
            controls.start({ y: 0 }).then(() => {
                setIsFixed(false);
            });
        }
    }, [scrollPosition]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={controls}
            className={`top-0 left-0 w-full z-50 transition-transform ease-linear duration-200  ${
                isFixed
                    ? 'fixed bg-[#FFFFFFE6] shadow-md backdrop-blur-xs'
                    : 'absolute bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
                <div className="flex flex-1 items-center gap-4">
                    <div className="flex items-center justify-center gap-2">
                        {boxIcons.map((item, index) => (
                            <BoxIcon
                                key={index}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                            />
                        ))}
                    </div>

                    <Menu listMenu={leftMenus} />
                </div>
                <div className=" flex justify-center items-center">
                    <img className="w-38" src={Logo} alt="marseille" />
                </div>
                <div className="flex flex-1 items-center justify-end gap-4">
                    <Menu listMenu={rightMenus} />

                    <div className="flex items-center justify-center gap-5">
                        <SlReload
                            size={20}
                            className="cursor-pointer"
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <SlHeart
                            size={20}
                            className="cursor-pointer"
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <CartHeader onClick={handleOpenSideBar} />
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
