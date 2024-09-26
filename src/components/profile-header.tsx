"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileHeader = () => {
  return (
    <div className="h-[291px] px-4 py-6 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start gap-6 flex">
      <div className="self-stretch h-[159px] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-end gap-2.5 flex">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://via.placeholder.com/64x64" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-[99px] shadow justify-start items-center gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <img
                  className="w-6 h-6"
                  src="https://via.placeholder.com/24x24"
                  alt="Award"
                />
              </div>
            </div>
            <div className="w-3.5 h-3.5 bg-green-400 rounded-full border border-white" />
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start flex">
              <div className="justify-center items-center inline-flex">
                <div className="text-neutral-700 text-[21px] font-semibold leading-relaxed">
                  Oscar Martinez
                </div>
                <Button
                  variant="ghost"
                  className="text-slate-600 text-[15px] font-medium leading-snug"
                >
                  Follow
                </Button>
              </div>
              <div className="text-neutral-700 text-[13px] leading-tight">
                CLO @ Airbnb
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <Button variant="ghost" className="rounded-3xl">
                <span className="text-neutral-700 text-[13px] font-semibold leading-tight">
                  168{" "}
                </span>
                <span className="text-zinc-400 text-[13px] font-semibold leading-tight">
                  Followers
                </span>
              </Button>
              <Button variant="ghost" className="rounded-3xl">
                <span className="text-neutral-700 text-[13px] font-semibold leading-tight">
                  240{" "}
                </span>
                <span className="text-zinc-400 text-[13px] font-semibold leading-tight">
                  Following
                </span>
              </Button>
            </div>
            <div className="px-[3px] justify-start items-center gap-2.5 inline-flex">
              {/* Add social icons here */}
            </div>
          </div>
        </div>
        <Button className="px-4 py-2.5 bg-slate-600 rounded-3xl text-white text-[13px] font-semibold leading-tight">
          Chat
        </Button>
        <div className="w-[380px] h-14 px-3 py-2 bg-white rounded-lg shadow border border-zinc-100 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-neutral-700 text-[13px] leading-tight">
            Looking to connect with others to learn more about AI legal stuff
          </div>
        </div>
      </div>
      <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch text-neutral-700 text-[13px] leading-tight">
          As the Chief Legal Officer at Airbnb, I oversee all legal matters and
          ensure compliance with regulations. My role involves managing a team
          of legal experts and providing strategic guidance to the company. I am
          dedicated to upholding the highest ethical standards and protecting
          Airbnb&apos;s interests.
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
