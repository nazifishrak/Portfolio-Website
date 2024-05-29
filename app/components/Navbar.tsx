"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine,  } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from "next/link";


interface NavContent {
  name: string;
  value: string;
}

const NAV_CONTENTS: Array<NavContent> = [
  { name: "Home", value: "" },
  { name: "Blog", value: "blog" },
  { name: "Projects", value: "projects" },
  { name: "About Me", value: "about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = React.useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
      <header className="w-full mx-auto px-4 sm:px-20 top-0  ">
        {/*class to bring default shape to navbar*/}
        {/* shadow bg-white dark:bg-black
      dark:border-b dark:border-black*/}
        <div className="justify-between md:items-center md:flex">
          <div className={"flex justify-between "}>

            <div className="pt-5 md:py-5 md:block">
              {/*<h2 className="text-2xl font-bold">Nazif Ishrak</h2>*/}
              <h2 className=" mt-4 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Nazif <mark
                  className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Ishrak</mark>
              </h2>
            </div>

            <div className={"md:hidden"}>
              <button onClick={()=>{setNavbar(!navbar)}} className={"pt-10"}>
                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
              </button>

            </div>


          </div>
          <div className={`${navbar? "flex flex-col items-center md:flex-row bg-slate-100 shadow-2xl rounded-xl font-thin dark:text-black": "hidden rounded-b-none font-thin dark:rounded-b-none"} md:flex md:space-x-6 font-bold`}>
            {NAV_CONTENTS.map((item, id) => (
                <Link className={` ${navbar? "": "mr-5"} pt-2`} key={id} href={`/${item.value}`}>{item.name}</Link>
            ))}
            <button onClick={handleThemeToggle} className="bg-slate-100 m-x-0 p-2 rounded-xl">
              {isDarkMode ? (
                  <RiSunLine size={25} color="black" />
              ) : (
                  <RiMoonFill size={25} color="black" />
              )}
            </button>
          </div>
        </div>
      </header>
  );
};
