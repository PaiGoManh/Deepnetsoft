import React from 'react';
import bgImage from '../assets/AdobeStock_292203735_Preview.jpeg';

const Menu = () => {
    return (
        <div className="md:relative md:h-[560px] md:bg-cover md:bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="md:absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="relative z-10">
                <h1 className="text-amber-700 md:text-3xl font-bold md:pl-[2.5%] md:mt-[-2%] hidden">SOFT</h1>
                <div className="text-center md:text-9xl text-white md:pt-[10%] font-bold text-3xl pt-[10%]">MENU</div>
                <div className="text-white md:text-xl md:text-center md:mt-[4%] mt-[8%] md:w-[600px] w-[300px] md:ml-[25%] ml-[8%] md:pb-0 pb-[10%] text-justify">
                    <p>
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
                    </p>
                    <p className="pt-4">
                        place an order use the "Order online" button located below the menu
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
