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
      className="relative rounded-full p-3 text-xl hover:bg-light-gray"
    >
      <span
        className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
        style={{ background: dotColor }}
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

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
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title={"Cart"}
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Notifications"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />
            <p>
              <span className="text-14 text-gray-400">Hi,</span>{" "}
              <span className="ml-1 text-14 font-bold text-gray-400">
                Christian
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
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
