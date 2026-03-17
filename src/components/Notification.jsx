import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { chatData } from "../data/dummy";

const Notification = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-5 top-16 w-96 rounded-lg bg-white p-8 shadow-lg dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <p className="text-lg font-semibold dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="rounded px-2 text-xs text-white"
            style={{ backgroundColor: currentColor }}
          >
            {chatData?.length || 0} New
          </button>
        </div>
        <button
          type="button"
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, notification: false }))
          }
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5">
        {chatData?.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b-1 border-color p-3 leading-8 cursor-pointer hover:bg-light-gray"
          >
            <img
              src={item.image}
              alt={item.message}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="font-semibold dark:text-gray-200">
                {item.message}
              </p>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
