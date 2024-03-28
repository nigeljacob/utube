import React from "react";
import * as CIIcons from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
import * as FAIcons from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="fixed flex-shrink-0 bar flex items-center">
      <div className="flex justify-center flex-1">
        <form className="flex flex-shrink-0 w-full justify-center items-center">
          <div className="flex bg-[#171717] w-[60%] rounded-[20px] flex-shrink-0 border-[1px] border-[#272727]">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent flex-1 m-[10px] border-none outline-none text-white"
            />
            <div className="bg-[#272727] rounded-e-[20px] min-h-full flex justify-center items-center w-[80px] cursor-pointer">
              <CIIcons.CiSearch className="w-[25px] h-[25px]" />
            </div>
          </div>

          <div className="ml-[20px] p-[10px] rounded-[50%] bg-[#272727] cursor-pointer">
            <FAIcons.FaMicrophone className="w-[20px] h-[20px]" />
          </div>
        </form>
      </div>

      <div className="min-w-[180px] min-h-ful flex items-center">
        <div className="flex-1 cursor-pointer">
          <MdOutlineVideoCall className="w-[30px] h-[30px] text-white" />
        </div>

        <div className="flex-1 cursor-pointer">
          <FAIcons.FaBell className="w-[20px] h-[25px] text-white" />
        </div>

        <div className="flex-1 cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
            alt="Avatar"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
