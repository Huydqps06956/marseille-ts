import { useOurShop } from '@contexts/OurShopProvider';
import { CiCircleList } from 'react-icons/ci';
import { TfiLayoutGrid4 } from 'react-icons/tfi';
import SelectBox from './SelectBox';

const Filter = () => {
    const {
        showOptions,
        sortOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        setPage
    } = useOurShop();
    const getValueSelect = (value: string, type: string) => {
        setPage(1);
        if (type === 'sort') {
            return setSortId(value);
        } else if (type === 'show') {
            return setShowId(value);
        }
    };

    const handleGridView = (isGrid: boolean) => setIsShowGrid(isGrid);
    return (
        <section className="pt-[15px]">
            <div className="flex items-center text-sm">
                <SelectBox
                    options={sortOptions}
                    id="sort"
                    className="w-45 overflow-hidden text-ellipsis"
                    onChange={getValueSelect}
                    type="sort"
                />

                <div className="inline-flex items-center">
                    <div
                        className="p-[10px] cursor-pointer"
                        onClick={() => handleGridView(true)}
                    >
                        <TfiLayoutGrid4 size={20} color="#404040" />
                    </div>
                    <span className="bg-[#e1e1e1] h-[1.2em] w-[1px] outline-0"></span>

                    <div
                        className="p-[10px] cursor-pointer"
                        onClick={() => handleGridView(false)}
                    >
                        <CiCircleList size={20} color="#222" />
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-[10px] text-sm">
                    <span className=" text-third">Show</span>
                    <SelectBox
                        options={showOptions}
                        id="limit"
                        onChange={getValueSelect}
                        type="show"
                    />
                </div>
            </div>
        </section>
    );
};

export default Filter;
