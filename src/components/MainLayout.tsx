const MainLayout = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section className={`main-container ${className ? className : ''}`}>
            {children}
        </section>
    );
};

export default MainLayout;
