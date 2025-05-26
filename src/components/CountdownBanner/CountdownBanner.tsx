import React from 'react';
import CDBanner from '@assets/images/cd-banner.png';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button';
const targetDate = '2025-07-31T23:59:59';

const CountdownBanner = () => {
    return (
        <div
            className="h-[400px] flex-1 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${CDBanner})` }}
        >
            <div className="flex items-center justify-center gap-[10px] mb-5">
                <CountdownTimer targetDate={targetDate} />
            </div>
            <h2 className="text-[28px]/10 capitalize text-center text-title mb-5">
                The classics make a comeback
            </h2>
            <Button
                size="sm"
                className="py-3 px-11 rounded-sm border border-primary hover:bg-[#FFFFFF00] hover:text-primary duration-300 block mx-auto"
            >
                Buy now
            </Button>
        </div>
    );
};

export default CountdownBanner;
