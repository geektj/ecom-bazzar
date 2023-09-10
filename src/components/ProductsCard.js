import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
    const navigate = useNavigate();
    // const _id = product.title.toLowerCase().split(" ").join("");
    const _id = product.title;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    }
    const rootId = idString(_id);

    console.log("__id",rootId);
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
        // this state we have to define for particular product details
        state: {
            item: product,
        }
    });
  }
  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden" onClick={handleProductDetails}>
        <img
          src={product?.image}
          alt="productImg"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product?.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 justify-end relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="text-gray-500 line-through">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {product?.oldPrice}
              </p>
              <p className="font-semibold">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {product?.price}
              </p>
            </div>
            <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:-translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product?.category}</p>
        </div>
        <div className="absolute top-4 right-0">{product?.isNew && <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">Sale</p>}</div>
      </div>
    </div>
  );
};
export default ProductsCard;
