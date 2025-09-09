import BannerImage from '@assets/images/shop-banner.png';
import Button from '@components/Button';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';

const OurShopBanner = () => {
    const targetDate = '2025-10-31T23:59:59';

    return (
        <div
            className="flex-col pt-[65px] pb-[55px] gap-5 bg-no-repeat bg-cover flex items-center text-center bg-center"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <CountdownTimer targetDate={targetDate} className="flex gap-4" />
            <h2 className="text-[28px] font-normal text-title capitalize">
                The classics make a comeback
            </h2>
            <Button className="rounded-sm px-[50px] py-3 text-sm/[1]">
                Buy now
            </Button>
        </div>
    );
};

export default OurShopBanner;
