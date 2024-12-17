import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-screen h-20 bg-black text-white flex justify-between font-bold p-6  pt-[5%] md:px-8 items-center">
                <ul className="text-2xl md:text-3xl">
                    <li>
                        <span className="text-blue-600">DEEP</span><span>NET</span>
                    </li>
                    <li className='md:hidden text-amber-700 md:mt-0 mt-[-8%]'>SOFT</li>
                </ul>

                <div 
                    className="md:hidden pr-4 text-3xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✖' : '☰'} 
                </div>

                <ul
                    className={`absolute md:static top-20 right-0 bg-black w-full md:w-auto md:flex md:gap-4 md:items-center text-center md:text-left transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li className="py-2 md:py-0 hover:text-blue-600 cursor-pointer">HOME</li>
                    <li className="py-2 md:py-0 hover:text-blue-600 cursor-pointer">MENU</li>
                    <li className="py-2 md:py-0 hover:text-blue-600 cursor-pointer">MAKE A RESERVATION</li>
                    <li className="py-2 md:py-0 hover:text-blue-600 cursor-pointer">CONTACT US</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
