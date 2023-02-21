import { SlHome } from "react-icons/sl";
import { RiCommunityLine } from "react-icons/ri";
import { AiOutlineCompass } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="bg-[#171f32] hidden text-white pl-10  w-60  lg:border-r lg:border-gray-400 py-11 relative lg:flex flex-col gap-40 overflow-x-hidden overflow-y-scroll ">
      <div className="flex flex-col gap-16">
        {/* LOGO */}
        <h2 className="uppercase font-stix ">
          Movie <span className="text-blue-300">vite</span>.
        </h2>
        {/* LOGO */}

        {/* MENU SECTION */}
        <div className="text-white flex flex-col gap-6 font-barlow text-sm">
          <h3 className="uppercase mb-5 text-sm text-gray-500">Menu</h3>
          <div className="flex gap-4 items-center ">
            <SlHome className="" />
            <p className="">Home</p>
          </div>
          <div className="flex gap-4 items-center">
            <RiCommunityLine className="text-white" />
            <p className="">Community</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineCompass className="" />
            <p className="">Coming Soon</p>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosTimer className="" />
            <p className="">Community</p>
          </div>
        </div>
        {/* Social SECTION */}
        <div className="text-white flex flex-col gap-6 font-barlow text-sm">
          <h3 className="mb-5 uppercase text-sm text-gray-500">Social</h3>
          <div className="flex gap-4 items-center ">
            <BsPerson className="" />
            <p className="">Friends</p>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlineSwitchAccount />
            <p className="">Shared Account</p>
          </div>
          <div className="flex gap-4 items-center">
            <FiYoutube className="" />
            <p className="">Media</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white flex flex-col gap-6 font-barlow text-sm">
          <h3 className="mb-5 uppercase text-sm text-gray-500">General</h3>
          <div className="flex gap-4 items-center ">
            <RiSettingsLine />
            <p className="">Settings</p>
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineLogout />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
