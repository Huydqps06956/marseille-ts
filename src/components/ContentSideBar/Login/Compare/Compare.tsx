import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import ProductItem from '@components/ContentSideBar/components/ProductItem';
import { IoIosGitCompare } from 'react-icons/io';

const Compare = () => {
    return (
        <div className="p">
            <HeaderSideBar
                title="COMPARE"
                icon={<IoIosGitCompare size={24} />}
            />
            <ProductItem />
        </div>
    );
};

export default Compare;
