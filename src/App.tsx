import SideBar from '@components/SideBar/SideBar';
import { CartProvider } from '@contexts/CartProvider';
import { SideBarProvider } from '@contexts/SideBarProvider';
import { StoreProvider } from '@contexts/StoreProvider';
import routers from '@router/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <StoreProvider>
                    <CartProvider>
                        <SideBarProvider>
                            <SideBar />
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    {routers.map((item, index) => (
                                        <Route
                                            path={item.path}
                                            element={<item.component />}
                                            key={index}
                                        />
                                    ))}
                                </Routes>
                            </Suspense>
                        </SideBarProvider>
                    </CartProvider>
                </StoreProvider>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};

export default App;
