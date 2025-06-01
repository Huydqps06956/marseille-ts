import React from 'react';
import type { MenuItem } from '@constants/header/menu';

const MenuItemComponent: React.FC<MenuItem> = ({ href, title }) => {
    return (
        <div
            className=" py-2 inline-block relative cursor-pointer
     after:content-[''] after:absolute after:w-full after:h-0.5 
     after:bottom-0 after:left-0 after:bg-primary
     after:scale-x-0 after:origin-right
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100"
            key={href}
        >
            {title}
        </div>
    );
};

export default MenuItemComponent;
