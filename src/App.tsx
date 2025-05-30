import { routers } from '@router/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
