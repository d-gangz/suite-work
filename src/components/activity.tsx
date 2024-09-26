"use client";

import { Button } from "@/components/ui/button";

const Activity = () => {
  return (
    <div className="self-stretch h-[1644px] py-6 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start flex">
      <div className="self-stretch px-4 justify-start items-start gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-neutral-700 text-[21px] font-semibold leading-relaxed">
          Activity
        </div>
      </div>
      <div className="self-stretch p-4 bg-white justify-start items-center gap-2 inline-flex">
        <Button
          variant="default"
          className="px-4 py-2.5 bg-neutral-700 rounded-[99px] text-white text-[13px] font-semibold leading-tight"
        >
          Interactions
        </Button>
        <div className="px-2 justify-start items-center gap-2.5 flex">
          <div className="w-8 h-[0px] origin-top-left rotate-90 border border-zinc-300"></div>
        </div>
        <Button
          variant="outline"
          className="px-4 py-2.5 bg-white rounded-[99px] text-neutral-700 text-[13px] font-semibold leading-tight"
        >
          Posts
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2.5 bg-white rounded-[99px] text-neutral-700 text-[13px] font-semibold leading-tight"
        >
          Documents
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2.5 bg-white rounded-[99px] text-neutral-700 text-[13px] font-semibold leading-tight"
        >
          Replies
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2.5 bg-white rounded-[99px] text-neutral-700 text-[13px] font-semibold leading-tight"
        >
          Upvotes
        </Button>
      </div>
      <div className="self-stretch px-4 pb-2 justify-start items-start gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-neutral-700 text-[13px] font-semibold leading-tight">
          Here&apos;s what you and Oscar have been up to, Greg!
        </div>
      </div>
      <div className="self-stretch h-[859px] px-4 flex-col justify-start items-start gap-4 flex">
        <ActivityItem type="reply" />
        <ActivityItem type="follow" />
        <ActivityItem type="upvote" />
      </div>
    </div>
  );
};

type ActivityItemProps = {
  type: "reply" | "follow" | "upvote";
};

const ActivityItem = ({ type }: ActivityItemProps) => {
  // Implement the activity item based on the type
  // This is a simplified version, you'll need to add more details based on the design
  return (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className={`w-3 h-3 ${type}outline`} />
        <div className="grow shrink basis-0 text-stone-400 text-[11px] font-semibold leading-none">
          {type === "reply" && "17 hrs ago • Amon replied to your post"}
          {type === "follow" && "1 day ago • Amon followed your post"}
          {type === "upvote" && "17 hrs ago • Amon upvoted your document"}
        </div>
      </div>
      <div className="self-stretch bg-white rounded border border-stone-200 flex-col justify-start items-start flex">
        {/* Add content based on the activity type */}
      </div>
    </div>
  );
};

export default Activity;
