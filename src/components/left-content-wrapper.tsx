"use client";

import ProfileHeader from "./profile-header";
import ProfileContent from "./profile-content";
import Activity from "./activity";

type LeftContentWrapperProps = {
  // Add any necessary props here
};

const LeftContentWrapper = ({}: LeftContentWrapperProps) => {
  return (
    <div className="w-[840px] py-4 flex-col justify-start items-start gap-4 inline-flex">
      <ProfileHeader />
      <ProfileContent />
      <Activity />
    </div>
  );
};

export default LeftContentWrapper;
