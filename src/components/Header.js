import React from "react";
// import { ecommerceLogo } from "../assets/index";
import { ShoppingBag } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state?.bazar?.productData);
  console.log("__productData", productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            {/* <img src={ecommerceLogo} alt='ecommerce-logo' /> */}
            <div className="text-3xl font-[900] line-through">bazzar</div>
          </div>
        </Link>
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
          <Link to="/cart">
            <div className="relative">
              {/* <i class="fa-solid fa-bag-shopping"></i> */}
              <img className="w-6" src={ShoppingBag} alt="shopping bag" />
              <span className="absolute w-6 top-1.5 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
