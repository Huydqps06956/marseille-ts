import Footer from '@components/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/MainLayout';

const App = () => {
    return (
        <>
            <Header />
            <MainLayout>
                <div className="min-h-screen">Content</div>
            </MainLayout>
            <Footer />
        </>
    );
};

export default App;
