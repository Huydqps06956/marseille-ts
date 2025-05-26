import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/MainLayout';

const HeadingListProducts = () => {
    return (
        <MainLayout>
            <div className="flex justify-between items-center gap-[15px]">
                <CountdownBanner />
                <div className="flex-1">
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadingListProducts;
