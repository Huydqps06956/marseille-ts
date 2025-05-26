import type { ReactElement } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export interface BoxI {
    icon: ReactElement;
    title: string;
    href: string;
}

export const boxIcons: BoxI[] = [
    { icon: <FaFacebookF />, href: '#', title: 'Facebook' },
    { icon: <FaInstagram />, href: '#', title: 'Instagram' },
    { icon: <FaYoutube />, href: '#', title: 'Youtube' }
];
