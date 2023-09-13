import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem = () => {
  const productData = useSelector((state) => state?.bazar?.productData);
  const dispatch = useDispatch();
  //   console.log("__productData", productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item?._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item?._id)) &
                  toast.error(`${item?.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item?.image}
                alt="productImg"
              />
            </div>
            <h2 className="w-52">{item?.title}</h2>
            <p className="w-10 flex items-center gap-1">
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {item?.price}
            </p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item?._id,
                        title: item?.title,
                        price: item?.price,
                        image: item?.image,
                        quanity: 1,
                        description: item?.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item?.quanity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item?._id,
                        title: item?.title,
                        price: item?.price,
                        image: item?.image,
                        quanity: 1,
                        description: item?.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14 flex items-center gap-1">
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {item?.quanity * item?.price}
            </p>
          </div>
        ))}
      </div>
      {productData.length === 0 ? (
        ""
      ) : (
        <button
          className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          onClick={() =>
            dispatch(resetCart()) & toast.error("Your cart is empty")
          }
        >
          reset cart
        </button>
      )}
      {/* {productData.length === 0 ? ( */}
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      {/* ) : null} */}

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default CartItem;
