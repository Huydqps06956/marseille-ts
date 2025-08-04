import { useEffect, useState } from 'react';
import { productApi, type ProductsRequest } from '@api/productService';

export const useProducts = (query: ProductsRequest) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await productApi.getProducts(query);
                setProducts(res.data.results);
                setTotal(res.data.meta.total);
            } catch (error: any) {
                setError(error.response?.data?.message || 'An error occurred.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [JSON.stringify(query)]);

    return { products, loading, error, total };
};
