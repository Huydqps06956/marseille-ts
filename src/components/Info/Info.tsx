import MainLayout from '@components/MainLayout';
import { dataInfo, type HomeInfoI } from '@constants/home/info';
import React from 'react';
import InfoCard from './InfoCard/InfoCard';

const Info: React.FC = () => {
    return (
        <div>
            <MainLayout>
                <div className="flex bg-primary py-5 px-15 text-white -mt-19">
                    {dataInfo.map((info: HomeInfoI, index) => (
                        <InfoCard {...info} key={index} />
                    ))}
                </div>
            </MainLayout>
        </div>
    );
};

export default Info;
