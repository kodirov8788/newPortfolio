import Link from "next/link";
import { useState } from "react";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
const Header = () => {
  const [headerLinkStyle, setHeaderLinkStyle] = useState(true);
  return (
    <div className="w-100 h-14 bg-red-200 flex justify-between text-2xl px-10 ">
      <div className="w-1/6 bg-red-3 h-full flex items-center pb-1 font-medium">
        <Link href="/">
          <a>
            <span className="text-3xl">Kodirov</span>
          </a>
        </Link>

        <div className="w-2 bg-yellow-700 h-2 mt-2 ml-1 rounded"></div>
      </div>
      <div className="w-2/6 bg-red-3 h-full flex items-center pb-1">
        {headerLinkStyle && (
          <ul className="flex justify-between w-full">
            <li className="Header__listItems">
              <Link href="#">
                <a className="flex items-center group transition-all ease-in duration-150">
                  <AiOutlineHome className="mr-1 group-hover:animate-bounce transition-all" />
                  <span>home</span>
                </a>
              </Link>
            </li>
            <li className="Header__listItems">
              <Link href="#">
                <a className="flex items-center group transition-all ease-in duration-150">
                  <AiOutlineUser className="mr-1 group-hover:animate-bounce transition-all" />
                  <span>About</span>
                </a>
              </Link>
            </li>
            <li className="Header__listItems">
              <Link href="#">
                <a className="flex items-center group transition-all ease-in duration-150">
                  <AiOutlineFundProjectionScreen className="mr-1 group-hover:animate-bounce transition-all" />
                  <span>Project</span>
                </a>
              </Link>
            </li>
            <li className="mr-2 transform group hover:text-red-600">
              <Link href="#">
                <a className="flex h-full transform hover:-scale-2 items-center border rounded border-gray-900">
                  <AiFillStar className="animate-spin " />
                  <CgGitFork className="transform group-hover:-translate-y-1 " />
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
