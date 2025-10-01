"use client";

import { useClickAway } from "@uidotdev/usehooks";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function UserDropDown() {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownClasses = clsx({
    hidden: !isDropDownOpened,
  });

  const toggleDropdown = () => {
    setIsDropDownOpened(!isDropDownOpened);
  };

  const dropdownRef = useClickAway<HTMLDivElement>((e) => {
    console.log(e);

    setIsDropDownOpened(false);
  });

  useEffect(() => {
    // Функція для перевірки ширини
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint = 768px
    };

    // Виклик при монтуванні
    handleResize();

    // Додаємо слухач на зміну розміру
    window.addEventListener("resize", handleResize);

    // Очищення слухача при демонтажі
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" relative  flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={() => toggleDropdown()}
      >
        <span className="sr-only">Open user menu</span>

        <div className="relative w-8 h-8">
          <Image
            src="/assets/profile-picture-3.jpg"
            alt="user photo"
            fill
            className="rounded-full object-cover"
            id="user-avatar"
          />
        </div>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        // className={`z-50 text-base list-none bg-white divide-y divide-gray-100
        //   rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600
        //   absolute right-0 top-full  mt-4
        //   ${dropdownClasses}`}
        className={twMerge(
          `z-50 text-base list-none bg-white divide-y divide-gray-100 
          rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600  
          absolute right-0 top-full  mt-4`,
          dropdownClasses
        )}
        id="user-dropdown"
        ref={dropdownRef}
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className=" inline-flex  md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded="false"
        style={{ display: isMobile ? "inline-flex" : "none" }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}
