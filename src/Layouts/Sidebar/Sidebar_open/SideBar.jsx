import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as CIIcons from "react-icons/ci";
import * as FAIcons from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-[250px] flex-shrink-0">
      <div className="flex items-center">
        <CIIcons.CiMenuBurger className="w-[25px] h-[25px]" />
        <div className="ml-[20px] flex items-center relative pr-[15px]">
          <div className="relative flex items-center justify-center">
            <div className="min-w-[10px] min-h-[10px] bg-white absolute"></div>
            <FAIcons.FaYoutube className="w-[35px] h-[35px] text-[red] z-10" />
          </div>
          <h1 className="ml-[5px] scale-y-150 font-semibold">YouTube</h1>
          <p className="absolute top-0 right-0 text-[10px]">LK</p>
        </div>
      </div>

      <div className="mt-[20px]">
        <ul>
          <li>
            <div className="flex flex-col p-[5px] w-[90%]">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#272727] rounded-[10px] mt-[10px]"
                    : "mt-[10px]"
                }
              >
                <div className="flex items-center rounded-[10px] p-[10px] hover:bg-[#272727]">
                  <IoMdHome className="w-[30px] h-[30px] mr-[20px]" />
                  <h1 className="text-[15px]">Home</h1>
                </div>
              </NavLink>

              <NavLink
                to={"/Shorts"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#272727] rounded-[10px] mt-[10px]"
                    : "mt-[10px]"
                }
              >
                <div className="flex items-center rounded-[10px] p-[10px] hover:bg-[#272727]">
                  <SiYoutubeshorts className="w-[25px] h-[25px] mr-[20px]" />
                  <h1 className="text-[15px]">Shorts</h1>
                </div>
              </NavLink>

              <NavLink
                to={"/Subscriptions"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#272727] rounded-[10px] mt-[10px]"
                    : "mt-[10px]"
                }
              >
                <div className="flex items-center rounded-[10px] p-[10px] hover:bg-[#272727]">
                  <MdOutlineSubscriptions className="w-[25px] h-[25px] mr-[20px]" />
                  <h1 className="text-[15px]">Subscriptions</h1>
                </div>
              </NavLink>
            </div>
          </li>
        </ul>

        <div className="min-w-[70%] w-[95%] min-h-[1px] bg-[#A7A7A7] mt-[10px]"> </div>



      </div>
    </div>
  );
};

export default SideBar;
