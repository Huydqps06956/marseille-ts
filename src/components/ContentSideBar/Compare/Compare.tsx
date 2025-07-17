import Button from '@components/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { IoIosGitCompare } from 'react-icons/io';
import ListProductSideBar from '../components/ListProductSideBar';

const Compare = () => {
    return (
        <>
            <HeaderSideBar
                title="COMPARE"
                icon={<IoIosGitCompare size={24} />}
            />
            <ListProductSideBar />
            <div className="w-full pt-5">
                <Button
                    className="rounded-sm py-3 px-6 hover-button-bg"
                    fullWidth
                >
                    VIEW COMPARE
                </Button>
            </div>
        </>
    );
};

export default Compare;
