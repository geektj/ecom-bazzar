import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Cart = () => {
  const productData = useSelector((state) => state?.bazar?.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item?.price * item?.quanity;
      return price;
    });
    setTotalAmt(price);
    // console.log("__price",price)
  }, [productData]);

  return (
    <>
      {productData.length > 0 ? (
        <div className="">
          {/* <img className="w-full h-60 object-cover" src="" /> */}
          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem />
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">Cart Totals</h2>
                <p className="flex items-center gap-4 text-base">
                  SubTotal
                  <span className="font-titleFont font-bold text-lg">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {totalAmt}
                  </span>
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shipping
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total{" "}
                <span className="text-xl font-bold">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  {totalAmt}
                </span>
              </p>
              <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center max-w-screen-xl mx-auto py-20 capitalize">
          <h2 className="">
            Your cart is empty. Please go back shopping and add products to cart
          </h2>
          <div>
            <Link to="/">
              <button className="mt-8 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                <span>
                  <HiOutlineArrowLeft />
                </span>
                go shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
    // <div className="">
    //   {/* <img className="w-full h-60 object-cover" src="" /> */}
    //   <div className="max-w-screen-xl mx-auto py-20 flex">
    //     <CartItem />
    //     <div className="w-1/3 bg-[#fafafa] py-6 px-4">
    //       <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
    //         <h2 className="text-2xl font-medium">Cart Totals</h2>
    //         <p className="flex items-center gap-4 text-base">
    //           SubTotal
    //           <span className="font-titleFont font-bold text-lg">
    //             <i className="fa-solid fa-indian-rupee-sign"></i>
    //             {totalAmt}
    //           </span>
    //         </p>
    //         <p className="flex items-start gap-4 text-base">
    //           Shipping
    //           <span>
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry.
    //           </span>
    //         </p>
    //       </div>
    //       <p className="font-titleFont font-semibold flex justify-between mt-6">
    //         Total{" "}
    //         <span className="text-xl font-bold">
    //           <i className="fa-solid fa-indian-rupee-sign"></i>{totalAmt}
    //         </span>
    //       </p>
    //       <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
    //         proceed to checkout
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Cart;
