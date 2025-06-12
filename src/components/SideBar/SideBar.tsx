import Login from '@components/ContentSideBar/Login/Login';
import { useSideBar } from '@contexts/SideBarProvider';
import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const SideBar: React.FC = () => {
    const { isOpen, setIsOpen } = useSideBar();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <aside className="relative ">
            <div
                className={
                    isOpen
                        ? 'fixed top-0 left-0 right-0 bottom-0 bg-[#0000004d] z-1000 transition-all druation-300 ease-initial'
                        : ''
                }
                onClick={handleToggle}
            ></div>
            <div
                className="fixed top-0 right-0 w-92 h-screen py-5 px-[30px] z-1001 transition-all duration-300 text-third text-sm shadow-md flex flex-col bg-white "
                style={{
                    transform: isOpen
                        ? 'translate3d(0, 0, 0)'
                        : 'translate3d(100%, 0, 0)'
                }}
            >
                {isOpen && (
                    <TfiClose
                        className="absolute top-[30px] -left-[50px] w-8 h-8 bg-white p-2 rounded-full text-title z-[1001] cursor-pointer hover:bg-[#e1e1e1]"
                        onClick={handleToggle}
                    />
                )}
                <Login />
            </div>
        </aside>
    );
};

export default SideBar;
