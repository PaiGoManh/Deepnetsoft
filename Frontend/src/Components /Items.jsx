import React, { useState } from 'react';
import FoodCard from './FoodCard';
import DrinksCard from './DrinksCard'; 
import BrunchCard from './BrunchCard';

const Items = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); 

  return (
    <div>
      <div className="md:relative md:h-[180px] h-[100px] md:bg-cover md:bg-center bg-black">
        <div className="md:relative md:z-10 flex text-white md:mx-[30%] mx-[15%] md:gap-5 gap-2 pt-[4%] font-extrabold">
          <div
            className="md:w-[200px] md:h-20 w-[150px] h-10 bg-black border-2 text-center md:pt-[4%] pt-2 md:text-2xl ring ring-blue-500 ring-inset cursor-pointer"
            onClick={() => setSelectedCategory('FOODS')} 
          >
            FOODS
          </div>
          <div
            className="md:w-[200px] md:h-20 w-[150px] h-10 bg-black border-2 text-center md:pt-[4%] pt-2 md:text-2xl ring ring-blue-500 ring-inset cursor-pointer"
            onClick={() => setSelectedCategory('DRINKS')} 
          >
            DRINKS
          </div>
          <div
            className="md:w-[200px] md:h-20 w-[150px] h-10 bg-black border-2 text-center md:pt-[4%] pt-2 md:text-2xl ring ring-blue-500 ring-inset cursor-pointer"
            onClick={() => setSelectedCategory('BRUNCH')} 
          >
            BRUNCH
          </div>
        </div>
      </div>

      <div>
        {selectedCategory === 'FOODS' && <FoodCard />}
        {selectedCategory === 'DRINKS' && <DrinksCard />}
        {selectedCategory === 'BRUNCH' && <BrunchCard />}
      </div>
    </div>
  );
};

export default Items;
