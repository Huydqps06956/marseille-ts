import { boxIcons } from '@constants/header/boxicon';
import { dataMenus } from '@constants/header/menu';
import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';

import Logo from '@assets/images/logo.png';
import { BsCart3 } from 'react-icons/bs';
import { SlHeart, SlReload } from 'react-icons/sl';

const Header = () => {
    return (
        <header className="bg-orange-100">
            <div className="w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex flex-1 items-center justify-between gap-4">
                    <div className="flex items-center justify-center gap-2">
                        {boxIcons.map((item, index) => (
                            <BoxIcon
                                key={index}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {dataMenus.slice(0, 3).map((menu, index) => (
                            <Menu
                                key={index}
                                title={menu.title}
                                href={menu.href}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="w-38" src={Logo} alt="marseille" />
                </div>
                <div className="flex flex-1 items-center justify-bet gap-4">
                    <div className="flex items-center justify-center gap-4">
                        {dataMenus
                            .slice(3, dataMenus.length)
                            .map((menu, index) => (
                                <Menu
                                    key={index}
                                    title={menu.title}
                                    href={menu.href}
                                />
                            ))}
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <SlReload size={20} />
                        <SlHeart size={20} />
                        <BsCart3 size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
