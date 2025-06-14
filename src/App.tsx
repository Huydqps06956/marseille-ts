import { routers } from '@router/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarProvider } from '@contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';

const App = () => {
    return (
        <>
            <SideBarProvider>
                <SideBar />
                <BrowserRouter>
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
                </BrowserRouter>
            </SideBarProvider>
        </>
    );
};

export default App;
