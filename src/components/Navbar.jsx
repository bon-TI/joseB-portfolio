import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { GiAirZigzag, GiStripedSun, GiMoonOrbit } from "react-icons/gi";
import { useShadow } from "../hooks/useShadow";
import { useTheme } from "next-themes";

function Navbar() {
  const [nav, setNav] = useState(false);
  const viewNav = () => {
    setNav(!nav);
  };
  
  const renderThemeButton = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    if (currentTheme === "dark") {
      return (
        <button className="theme-button m-3" onClick={() => setTheme("light")}>
          <GiStripedSun size={25} />
        </button>
      );
    } else {
      return (
        <button className="theme-button m-3" onClick={() => setTheme("dark")}>
          <GiMoonOrbit size={25} />
        </button>
      );
    }
  };
  const { systemTheme, theme, setTheme } = useTheme();

  const { shadow } = useShadow();
  
  return (
    <div>
      <nav
        className={
          shadow
            ? "contrast-125 backdrop-blur shadow-xl fixed w-full h-14 transition-all z-20 inset-x-0 top-0"
            : "backdrop-blur fixed w-full h-16 z-20 inset-x-0 top-0"
        }
      >
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-2 font-inter">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <GiAirZigzag className="stroke-1 text-3xl mx-3 text-torch-600" />
              <h1 className="text-gray-800 font-bold capitalize text-lg md:text-xl dark:text-white">
                José Bolivar
              </h1>
            </div>
          </Link>

          <div className="flex">
            <ul className="hidden md:flex ">
              <Link href="/">
                <button className="button m-3 ">Home</button>
              </Link>
              <Link href="/projects">
                <button className="button m-3 ">Projects</button>
              </Link>
            </ul>
            
            <div>{renderThemeButton()}</div>

            <div className="md:hidden">
              <button onClick={viewNav} className="menu-button m-3 ">
                <HiMenu size={25} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={
          nav
            ? "md:hidden backdrop-blur contrast-125 bg-transparent rounded-xl px-4 py-2 z-20 fixed top-16 right-5"
            : "hidden"
        }
      >
        <ul className="flex flex-col">
          <Link href="/">
            <button className="button m-1">Home</button>
          </Link>
          <Link href="/projects">
            <button className="button m-1">Projects</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
