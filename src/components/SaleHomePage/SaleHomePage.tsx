import React from 'react';
import Button from '@components/Button';
import useTranslateXImage from '@hooks/useTranslateXImage';

const SaleHomePage: React.FC = () => {
    const { translateXPosition } = useTranslateXImage();

    return (
        <section className="my-20 flex justify-center">
            <div
                className="w-2/5 flex justify-center transition-all duration-100 ease-linear"
                style={{
                    transform: `translate3d(${-translateXPosition}px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)`
                }}
            >
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                    alt="iamges"
                />
            </div>
            <div className="flex flex-col justify-center items-center w-[19%] text-center">
                <h2 className="capitalize text-title text-4xl mb-5">
                    Sale of the year
                </h2>
                <p className="leading-[26px] text-third mb-5 ">
                    Libero sed faucibus facilisis fermentum. Est nibh sed
                    massaxw sodales.
                </p>
                <Button
                    variant="outline"
                    className="rounded-sm py-[13px] px-[45px] text-sm/[14px] mt-5 duration-300 "
                >
                    Read more
                </Button>
            </div>
            <div
                className="w-2/5 flex justify-center transition-all duration-100 ease-linear"
                style={{
                    transform: `translate3d(${translateXPosition}px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)`
                }}
            >
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                    alt="iamges"
                    className="items-center content-center"
                />
            </div>
        </section>
    );
};

export default SaleHomePage;
