import React from "react";
import Image from "next/image";

type Props = {};

const VideoCard = (props: Props) => {
  return (
    <div className="flex rounded-2xl h-80 cursor-pointer hover:opacity-90 border border-transparent duration-300 overflow-hidden relative shadow-xl">
      <div className="w-full h-full relative">
        <Image
          src={"/card.png"}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col p-4 justify-between">
        <p className="text-white font-semibold text-xl">The Sound of Silence</p>

        <div className="bg-white/40 backdrop-blur-sm rounded-xl py-3 px-6 w-full flex justify-between items-center">
          <p className="text-white text-center text-xs">
            Shares
            <br />
            <span className="font-semibold text-lg">317</span>
          </p>

          <p className="text-white text-center text-xs">
            Offered
            <br />
            <span className="font-semibold text-lg"> 75&amp;</span>
          </p>

          <p className="text-white text-center text-xs">
            Raised
            <br />
            <span className="font-semibold text-lg">$9510</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
