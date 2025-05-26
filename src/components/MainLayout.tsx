const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex justify-center">
            <div className="w-7xl h-screen"> {children}</div>
        </main>
    );
};

export default MainLayout;
