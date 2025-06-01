import { useEffect, useMemo, useState } from 'react';
import { dataMenus } from '@constants/header/menu';
import { BsCart3 } from 'react-icons/bs';
import { SlHeart, SlReload } from 'react-icons/sl';
import Logo from '@assets/images/logo.png';
import { boxIcons } from '@constants/header/boxicon';
import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { motion, useAnimation } from 'framer-motion';
import { useScrollHandling } from '@hooks/useScrollHandling';

const Header = () => {
    const controls = useAnimation();
    const [isFixed, setIsFixed] = useState(false);
    const { scrollPosition } = useScrollHandling();

    const leftMenus = useMemo(() => dataMenus.slice(0, 3), []);
    const rightMenus = useMemo(() => dataMenus.slice(3), []);
    useEffect(() => {
        if (scrollPosition >= 80 && !isFixed) {
            controls
                .start({ y: -100, transition: { duration: 0.03 } })
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
                <div className="flex-1 flex justify-center items-center">
                    <img className="w-38" src={Logo} alt="marseille" />
                </div>
                <div className="flex flex-1 items-center justify-end gap-4">
                    <Menu listMenu={rightMenus} />

                    <div className="flex items-center justify-center gap-5">
                        <SlReload size={20} />
                        <SlHeart size={20} />
                        <BsCart3 size={20} />
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
