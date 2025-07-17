import React from 'react';
import BannerImage from '@assets/images/banner.png';
import Button from '@components/Button.tsx';
const Banner: React.FC = () => {
    return (
        <section
            className="min-h-[750px] bg-no-repeat bg-cover flex items-center justify-center text-center bg-center"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-title font-normal">
                    XStore Marseille04 Demo
                </h1>
                <p className="text-base/6 font-normal text-third">
                    Make yours celebrations even more special this years with
                    beautiful.
                </p>
                <div className="pt-4">
                    <Button
                        size="sm"
                        className="py-3 px-11 rounded-sm hover-button-bg"
                    >
                        Go to shop
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
