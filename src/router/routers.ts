import { lazy } from 'react';

export const routers = [
    { path: '/', component: lazy(() => import('@pages/Home/Home')) },
    { path: '/blog', component: lazy(() => import('@pages/Blog/Blog')) }
];
