import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { cartData } from "../data/dummy";

const Cart = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-5 top-16 w-96 rounded-lg bg-white p-8 shadow-lg dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Shopping Cart</p>
        <button
          type="button"
          onClick={() => setIsClicked((prev) => ({ ...prev, cart: false }))}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
        >
          <MdOutlineCancel />
        </button>
      </div>
      {cartData?.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-5 border-b-1 border-color p-4 leading-8">
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-lg"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="mt-2 flex items-center gap-4">
                <p
                  className="text-lg font-semibold"
                  style={{ color: currentColor }}
                >
                  {item.price}
                </p>
                <div className="flex items-center gap-2 rounded border-1 border-color">
                  <button
                    type="button"
                    className="p-2 text-red-600 hover:bg-light-gray"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="px-1 font-semibold text-green-600">0</span>
                  <button
                    type="button"
                    className="p-2 text-green-600 hover:bg-light-gray"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Sub Total</p>
          <p className="font-semibold">$890</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-gray-500">Total</p>
          <p className="font-semibold">$890</p>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="button"
          style={{ backgroundColor: currentColor, borderRadius: "10px" }}
          className="w-full p-3 text-white hover:drop-shadow-xl"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
