import type { MenuItem } from '@constants/header/menu';
import React from 'react';
import MenuItemComponent from './MenuItemComponent';

interface IMenuProps {
    listMenu: MenuItem[];
}

const Menu: React.FC<IMenuProps> = ({ listMenu }) => {
    return (
        <div className="flex items-center justify-center gap-4">
            {listMenu.map((item, index) => {
                return (
                    <MenuItemComponent
                        key={index}
                        title={item.title}
                        href={item.href}
                    />
                );
            })}
        </div>
    );
};

export default Menu;
