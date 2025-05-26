const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center">
            <div className="w-7xl h-screen"> {children}</div>
        </div>
    );
};

export default MainLayout;
