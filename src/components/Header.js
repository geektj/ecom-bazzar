import React from "react";
import { ecommerceLogo } from "../assets/index";
import {ShoppingBag} from "../assets/index";
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          {/* <img src={ecommerceLogo} alt='ecommerce-logo' /> */}
          <div className="text-3xl font-[900] line-through">bazzar</div>
        </div>
        <div className="flex items-center gap-8 cursor-pointer">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Blog
            </li>
          </ul>
          <div>
          {/* <i class="fa-solid fa-bag-shopping"></i> */}
          <img src={ShoppingBag} alt="shopping bag"/>
          </div>
          <div>
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
