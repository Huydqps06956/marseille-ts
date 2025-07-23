import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home/Home'));
const Blog = lazy(() => import('@pages/Blog/Blog'));
const OurShop = lazy(() => import('@pages/OurShop/OurShop'));

const routers = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: 'shop', component: OurShop }
];
export default routers;
