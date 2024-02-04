import { PlusIcon } from "lucide-react";
import React from "react";
import VideoCard from "./VideoCard";

type Props = {};

const Releases = (props: Props) => {
  return (
    <div className="py-20">
      <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-2xl">Releases</p>
          <p className="font-serif">
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-8 md:gap-y-0 md:grid-cols-4 gap-x-8">
          <div className="flex flex-col gap-y-2 pl-5 items-start border-l border-gray-200">
            <p className="font-semibold text-lg">1</p>
            <p className="font-serif">
              Shared <br /> Videos
            </p>
          </div>
          <div className="flex flex-col gap-y-2 pl-5 items-start border-l border-gray-200">
            <p className="font-semibold text-lg">$9510</p>
            <p className="font-serif">
              Funds <br /> Raised
            </p>
          </div>
          <div className="flex flex-col gap-y-2 pl-5 items-start border-l border-gray-200">
            <p className="font-semibold text-lg">317</p>
            <p className="font-serif">
              Co-owner <br /> community
            </p>
          </div>
          <div className="flex flex-col gap-y-2 pl-5 items-start border-l border-gray-200">
            <p className="font-semibold text-lg">$3804</p>
            <p className="font-serif">
              Co-owner <br /> Earnings
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12 pb-32">
        <div className="flex flex-col items-center justify-end bg-[#ededed] rounded-2xl h-80 p-8 text-center gap-14 cursor-pointer hover:opacity-90 border border-transparent hover:border-black/5 hover:shadow-inner duration-300">
          <PlusIcon className="h-14 w-14 opacity-50" />
          <p className="text-black/50">
            You haven&apos;t uploaded any videos with aBit yet. Add now!
          </p>
        </div>

        <VideoCard />
      </div>
    </div>
  );
};

export default Releases;
