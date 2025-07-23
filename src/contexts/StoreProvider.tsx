import { authApi } from '@api/authService';
import Cookies from 'js-cookie';
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from 'react';

interface StoreContextType {
    userInfo: User | null;
    setUserInfo: (user: User | null) => void;
    isLoggedIn: boolean;
    handleLogout: () => void;
}
interface StoreProviderProps {
    children: ReactNode;
}
export const StoreContext = createContext<StoreContextType | undefined>(
    undefined
);
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const userId = Cookies.get('user_id');
    const handleLogout = () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        Cookies.remove('user_id');
        setUserInfo(null);
    };

    useEffect(() => {
        if (userId) {
            // Fetch user profile if userId exists
            authApi
                .getProfile(userId)
                .then(response => {
                    setUserInfo(response.data);
                })
                .catch((error: any) => {
                    console.error('Failed to fetch user profile:', error);
                });
        } else {
            setUserInfo(null);
        }
    }, [userId]);

    const value: StoreContextType = {
        userInfo: userInfo || null,
        isLoggedIn: userInfo !== null,
        setUserInfo: (user: User | null) => {
            setUserInfo(user);
        },
        handleLogout: handleLogout
    };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};

export function useStore(): StoreContextType {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }

    return context;
}
