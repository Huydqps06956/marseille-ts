import routers from '@router/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarProvider } from '@contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
            <BrowserRouter>
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
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};

export default App;
