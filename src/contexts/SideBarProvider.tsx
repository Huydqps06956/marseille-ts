import { createContext, useContext, useState, type ReactNode } from 'react';
interface ISideBarContext {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    type: string;
    setType: (type: string) => void;
}
interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext<ISideBarContext | undefined>(
    undefined
);

export const SideBarProvider: React.FC<SideBarProviderProps> = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [type, setType] = useState<string>('');

    const value: ISideBarContext = {
        isOpen,
        setIsOpen,
        type,
        setType
    };
    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};

export function useSideBar(): ISideBarContext {
    const context = useContext(SideBarContext);

    if (context === undefined) {
        throw new Error('useSideBar must be used within a SideBarProvider');
    }

    return context;
}
