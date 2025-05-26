import React from 'react';
import BannerImage from '@assets/images/banner.png';
import Button from '@components/Button';
const Banner: React.FC = () => {
    return (
        <section
            className="min-h-[750px] bg-no-repeat bg-cover flex items-center justify-center text-center bg-center"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="space-y-4">
                <h1 className="text-[42px] text-title font-normal">
                    XStore Marseille04 Demo
                </h1>
                <p className="text-base/6 font-normal text-third">
                    Make yours celebrations even more special this years with
                    beautiful.
                </p>
                <div className="pt-4">
                    <Button
                        size="sm"
                        className="py-3 px-11 rounded-sm border border-primary hover:bg-[#FFFFFF00] hover:text-primary duration-300"
                    >
                        Go to shop
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
