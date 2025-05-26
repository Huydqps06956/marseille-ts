import type { ReactElement } from 'react';
import {
    CiBoxes,
    CiChat1,
    CiCreditCard1,
    CiDeliveryTruck
} from 'react-icons/ci';

export interface HomeInfoI {
    title: string;
    description: string;
    icon: ReactElement;
}
export const dataInfo: HomeInfoI[] = [
    {
        title: 'Fastest Shipping',
        description: 'Order at $39 order',
        icon: <CiDeliveryTruck />
    },
    {
        title: '100% Safe Payments',
        description: '9 month installments',
        icon: <CiCreditCard1 />
    },
    {
        title: '14-Days Return',
        description: 'Shop with confidence',
        icon: <CiBoxes />
    },
    {
        title: '24/7 Online Support',
        description: 'Delivered to home',
        icon: <CiChat1 />
    }
];
