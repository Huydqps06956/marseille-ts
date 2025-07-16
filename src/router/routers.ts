import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Blog = lazy(() => import('../pages/Blog/Blog'));

const routers = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog }
];
export default routers;
