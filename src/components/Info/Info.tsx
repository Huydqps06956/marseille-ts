import React from 'react';
import MainLayout from '@components/MainLayout.tsx';
import { dataInfo, type HomeInfoI } from '@constants/home/info';
import InfoCard from './InfoCard/InfoCard';

const Info: React.FC = () => {
    return (
        <MainLayout>
            <div className="flex bg-primary py-5 px-15 text-white -mt-19">
                {dataInfo.map((info: HomeInfoI, index) => (
                    <InfoCard {...info} key={index} />
                ))}
            </div>
        </MainLayout>
    );
};

export default Info;
