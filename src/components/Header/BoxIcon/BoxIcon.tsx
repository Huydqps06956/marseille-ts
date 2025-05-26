import type { BoxI } from '@constants/header/boxicon';
import React from 'react';
const BoxIcon: React.FC<BoxI> = ({ icon, href, title }) => {
    return (
        <div
            title={title}
            className="rounded-full border-primary border p-[6px]  bg-primary text-white text-xs"
        >
            {icon}
        </div>
    );
};

export default BoxIcon;
