"use client";

import { BellIcon, ChevronDownIcon, Wallet2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />

      <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-200 z-40 bg-white/80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="relative flex items-center gap-2.5"
            >
              <span className="inline-flex text-lg font-bold text-indigo-950">
                aBit
              </span>
            </Link>
          </div>

          <div
            className={`
          absolute top-full left-0 bg-white lg:bg-transparent border-b border-gray-200 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
          ${
            navIsOpened
              ? "visible opacity-100 translate-y-0"
              : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
          }
          `}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mb-8 lg:mb-0">
              <Button
                variant={"roundedOutline"}
                size={"rounded"}
              >
                Share new video
              </Button>
            </div>

            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center text-gray-700 lg:w-full lg:justify-center">
              <li className="">
                <Link
                  href="#"
                  className="relative py-2.5 inline-flex gap-2"
                >
                  <Wallet2Icon className="text-gray-500 hover:text-gray-950 duration-300 ease-linear" />
                  <p className="lg:hidden">Account Balance</p>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="relative py-2.5 inline-flex gap-2"
                >
                  <BellIcon className="text-gray-500 hover:text-gray-950 duration-300 ease-linear" />
                  <p className="lg:hidden">Notifications</p>
                </Link>
              </li>

              <li className="lg:hidden flex items-center gap-5">
                <Avatar>
                  <AvatarImage src="/profile.jpeg" />
                </Avatar>
                <div>
                  <p>User name</p>
                  <p>username@gmail.com</p>
                </div>
              </li>
            </ul>

            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2.5">
                  <Avatar>
                    <AvatarImage src="/profile.jpeg" />
                  </Avatar>
                  <ChevronDownIcon className="text-gray-500 h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400 focus:text-red-500">
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
              flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              ></span>
              <span
                aria-hidden={true}
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
