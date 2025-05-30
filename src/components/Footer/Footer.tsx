import { dataMenus } from '@constants/footer/menu';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-[#363636] text-white flex flex-col py-10 items-center space-y-5">
            <div>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
                    alt="logo"
                    width={160}
                    height={55}
                />
            </div>
            <ul className="flex gap-11 my-[15px_20px]">
                {dataMenus.map((menu, index) => (
                    <li className="text-[15]" key={index}>
                        {menu.title}
                    </li>
                ))}
            </ul>

            <div className="text-center">
                <p className="mb-5">Guaranteed safe checkout </p>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                    alt="payment"
                    className="mb-5"
                />
            </div>

            <div className="text-center">
                Copyright © 2025 Hui theme. Created by Hui
            </div>
        </div>
    );
};

export default Footer;
