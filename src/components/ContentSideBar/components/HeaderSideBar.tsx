interface IHeaderSideBarProps {
    title: string;
    icon: React.ReactNode;
}
const HeaderSideBar: React.FC<IHeaderSideBarProps> = ({ title, icon }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-2">
            {icon}
            <div className="text-lg text-third">{title}</div>
        </div>
    );
};

export default HeaderSideBar;
