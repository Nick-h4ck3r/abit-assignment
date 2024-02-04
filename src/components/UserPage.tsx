import React from "react";
import ProfileImg from "./ProfileImg";
import Releases from "./Releases";

type Props = {};

const UserPage = (props: Props) => {
  return (
    <div className="mx-auto flex flex-col gap-y-10 relative">
      <div className="flex">
        <ProfileImg />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 pt:10 md:pt-16 lg:pt-24">
        <Releases />
      </div>
    </div>
  );
};

export default UserPage;
