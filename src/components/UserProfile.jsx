import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiUser, FiMail, FiLogOut } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext();

  const userMenuItems = [
    { icon: <FiUser />, title: "My Profile", desc: "Account Settings" },
    { icon: <FiMail />, title: "My Inbox", desc: "Messages & Emails" },
  ];

  return (
    <div className="nav-item absolute right-1 top-16 w-96 rounded-lg bg-white p-8 shadow-lg dark:bg-secondary-dark-bg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, userProfile: false }))
          }
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-6 flex items-center gap-5 border-b-1 border-color pb-6">
        <img
          src={avatar}
          alt="user-profile"
          className="h-24 w-24 rounded-full"
        />
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">Christian</p>
          <p className="text-sm text-gray-500">Administrator</p>
          <p className="text-sm font-semibold text-gray-500">
            info@shop.com
          </p>
        </div>
      </div>
      {userMenuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-5 border-b-1 border-color p-4 cursor-pointer hover:bg-light-gray"
        >
          <button
            type="button"
            className="rounded-lg p-3 text-xl"
            style={{ color: currentColor, backgroundColor: `${currentColor}20` }}
          >
            {item.icon}
          </button>
          <div>
            <p className="font-semibold dark:text-gray-200">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <button
          type="button"
          style={{ backgroundColor: currentColor, borderRadius: "10px" }}
          className="w-full p-3 text-white hover:drop-shadow-xl flex items-center justify-center gap-2"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
