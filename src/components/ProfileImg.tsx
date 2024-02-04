"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Switch } from "./ui/switch";

type Props = {};

const ProfileImg = (props: Props) => {
  const [isCreator, setIsCreator] = useState(true);

  return (
    <div className="bg-pink-400 h-44 md:h-64 lg:h-96 w-full">
      <div className="relative h-full w-full">
        <div className="absolute h-44 md:h-64 lg:h-96 w-full">
          <Image
            src={"/header.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative">
        <div className="absolute flex overflow-hidden bg-white/85 backdrop-blur-sm -bottom-10 md:-bottom-16 lg:-bottom-24 rounded-3xl shadow-2xl w-[330px] md:w-[500px] lg:w-[650px]">
          <div className="w-2/5 h-40 md:h-56 lg:h-60 relative">
            <Image
              src={"/profile.jpeg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative p-3 md:p-6 flex flex-col gap-3 md:gap-0 w-3/5 items-start justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full pr-4">
              <p className="font-bold text-lg md:text-2xl">DAN MACE</p>
              <p className="text-xs md:text-sm font-semibold text-gray-600">
                @johny_films
              </p>
            </div>

            {/* bio section  */}
            <div className="md:py-2">
              <p className="text-gray-600 font-medium text-sm hidden md:block">
                Bio
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
                Simply a film fan creating original content for YouTube.
                Let&apos;s Collaborate.
              </p>
            </div>

            {/* here toggle switch for creator and subscriber */}
            <div className="hidden md:flex items-center cursor-pointer bg-black/80 p-1 rounded-xl">
              <span
                onClick={() => setIsCreator(true)}
                className={`duration-300 rounded-lg px-6 py-1.5 font-medium text-sm ${
                  isCreator ? "bg-white text-black" : "text-white/50"
                }`}
              >
                Creator
              </span>

              <span
                onClick={() => setIsCreator(false)}
                className={`duration-300 rounded-lg px-6 py-1.5 font-medium text-sm ${
                  !isCreator ? "bg-white text-black" : "text-white/50"
                }`}
              >
                Subscriber
              </span>
            </div>

            <div className="flex md:hidden items-center space-x-2 text-sm">
              <Switch
                defaultChecked={true}
                onCheckedChange={(checked) => setIsCreator(checked)}
                value={"creator"}
                id="creator-mode"
              />
              <p>{isCreator ? "Creator" : "Subscriber"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
