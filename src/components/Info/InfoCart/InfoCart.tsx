import type { HomeInfoI } from '@constants/home/info';
import React from 'react';

const InfoCart: React.FC<HomeInfoI> = ({ icon, description, title }) => {
    return (
        <div className="flex flex-1 justify-between items-center gap-5 p-[15px]">
            <div className="text-5xl text-five">{icon}</div>
            <div className="flex flex-col gap-[10px]">
                <span className="text-[17px]">{title}</span>
                <span className="text-[#FFFFFFC7]">{description}</span>
            </div>
        </div>
    );
};

export default InfoCart;
