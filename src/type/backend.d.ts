export {};

declare global {
    interface User {
        _id: string;
        name: string;
        email: string;
        iamge?: string;
    }
    interface ProductSize {
        name: string;
        amount: string;
        _id?: string;
    }

    interface Product {
        _id: string;
        name: string;
        price: number;
        description: string;
        type: string;
        size: ProductSize[];
        material: string;
        images: string[];
        deletedAt: string | null;
        createdAt: string;
        updatedAt: string;
        __v?: number;
    }

    interface ProductInCart {
        _id: string;
        productId: string;
        size: string;
        quantity: number;
        price: number;
        productName: string;
        primaryImage: string;
    }
    interface Cart {
        items: ProductInCart[];
        total: number;
    }

    interface ILogin {
        user: {
            _id: string;
            email: string;
            name: string;
        };
        accessToken: string;
    }

    type TSideBar = 'login' | 'compare' | 'cart' | 'wishlist' | 'register';
}
