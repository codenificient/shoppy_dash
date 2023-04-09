import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/ContextProvider";

import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, color, dotColor, icon }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
        style={{ background: dotColor }}
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    setActiveMenu(true);
  }, [screenSize, setScreenSize, setActiveMenu]);

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title={"Menu"}
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={"blue"}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title={"Cart"}
          customFunc={() => handleClick("cart")}
          color={"blue"}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("chat")}
          color={"blue"}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Notifications"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("notification")}
          color={"blue"}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="ml-1 font-bold text-gray-400 text-14">
                Christian
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
