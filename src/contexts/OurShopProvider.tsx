import { useProducts } from '@hooks/useProducts';
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from 'react';
interface IOurShopContext {
    sortOptions: IOption[];
    showOptions: IOption[];
    sortId: string;
    setSortId: (sortId: string) => void;
    showId: string;
    setShowId: (sortId: string) => void;
    isShowGrid: boolean;
    setIsShowGrid: (isShowGrid: boolean) => void;
    products: Product[];
    loading: boolean;
    total: number;
    handleLoadMoreProducts: () => void;
    setPage: (page: number) => void;
}
interface OurShopProviderProps {
    children: ReactNode;
}

export interface IOption {
    label: string;
    value: string;
}
export const OurShopContext = createContext<IOurShopContext | undefined>(
    undefined
);

export const OurShopProvider: React.FC<OurShopProviderProps> = ({
    children
}) => {
    const [sortId, setSortId] = useState('-createdAt');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);

    const {
        products: listProducts,
        loading,
        total
    } = useProducts({
        current: page,
        pageSize: showId ? parseInt(showId) : 8,
        sort: sortId ? sortId : ''
    });

    const sortOptions: IOption[] = [
        { label: 'Default sorting', value: '-createdAt' },
        { label: 'Sort by price: low to high', value: 'price' },
        { label: 'Sort by price: high to low', value: '-price' }
    ];

    const showOptions: IOption[] = [
        {
            label: '8',
            value: '8'
        },
        {
            label: '12',
            value: '12'
        }
    ];

    const handleLoadMoreProducts = () => setPage(prevPage => prevPage + 1);

    const value: IOurShopContext = {
        sortOptions,
        showOptions,
        sortId,
        setSortId,
        showId,
        setShowId,
        isShowGrid,
        setIsShowGrid,
        products,
        loading,
        total,
        handleLoadMoreProducts,
        setPage
    };
    useEffect(() => {
        if (page === 1) {
            setProducts(listProducts);
        } else {
            setProducts(prev => [...prev, ...listProducts]);
        }
    }, [listProducts]);

    return (
        <OurShopContext.Provider value={value}>
            {children}
        </OurShopContext.Provider>
    );
};

export function useOurShop(): IOurShopContext {
    const context = useContext(OurShopContext);

    if (context === undefined) {
        throw new Error('useOurShop must be used within a OurShopProvider');
    }

    return context;
}
