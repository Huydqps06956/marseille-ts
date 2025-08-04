import { useSideBar } from '@contexts/SideBarProvider';
import { useStore } from '@contexts/StoreProvider';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
    title: string;
    href: string;
}
const MenuItemComponent: React.FC<MenuItemProps> = ({ href, title }) => {
    const { setIsOpen, setType } = useSideBar();
    const { userInfo, isLoggedIn, handleLogout } = useStore();
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        if (title === 'Sign In' && !isLoggedIn) {
            setType('login');
            setIsOpen(true);
        }
        if (title === 'Our Shop') {
            return navigate('/shop');
        }
    };

    const handleHover = () => {
        if (title === 'Sign In' && isLoggedIn) {
            return setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className=" py-2 inline-block relative cursor-pointer
     after:content-[''] after:absolute after:w-full after:h-0.5 
     after:bottom-0 after:left-0 after:bg-primary
     after:scale-x-0 after:origin-right
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100"
            key={href}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={() => setIsShowSubMenu(false)}
        >
            {title === 'Sign In' && !userInfo
                ? 'Sign In'
                : title === 'Sign In' && userInfo
                ? `Hello ${userInfo.name ? userInfo.name : userInfo.email}`
                : title}

            {isShowSubMenu && (
                <div
                    className="absolute bg-white w-full min-w-45 mt-2 p-1 cursor-pointer"
                    onClick={handleLogout}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
};

export default MenuItemComponent;
