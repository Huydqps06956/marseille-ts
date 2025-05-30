import queryString from 'query-string';
import axiosClient from './axiosClient';
export interface ProductsRequest {
    current: number;
    pageSize: number;
    sort?: string;
}
export interface ProductsResponse {
    meta: {
        current: number;
        pageSize: number;
        pages: number;
        total: number;
    };
    results: Product[];
}

export const productApi = {
    getProducts: (query: ProductsRequest) => {
        return axiosClient.get<ProductsResponse>(
            `/products?${queryString.stringify(query)}`
        );
    }
};
