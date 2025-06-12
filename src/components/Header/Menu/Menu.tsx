import React from 'react';
import type { MenuItem } from '@constants/header/menu';
import MenuItemComponent from './MenuItemComponent';
import { useSideBar } from '@contexts/SideBarProvider';

interface IMenuProps {
    listMenu: MenuItem[];
    onClick?: () => void;
}

const Menu: React.FC<IMenuProps> = ({ listMenu, onClick }) => {
    return (
        <div className="flex items-center justify-center gap-4">
            {listMenu.map((item, index) => {
                return (
                    <MenuItemComponent
                        key={index}
                        title={item.title}
                        href={item.href}
                        onClick={onClick}
                    />
                );
            })}
        </div>
    );
};

export default Menu;
