"use client";

import { Button } from "@/components/ui/button";

const ProfileContent = () => {
  return (
    <div className="w-[840px] px-4 py-6 bg-white rounded-lg border border-zinc-300 justify-start items-start gap-4 inline-flex">
      <div className="grow shrink basis-0 px-2 flex-col justify-start items-start gap-2 inline-flex">
        <InfoItem icon="location" text="San Francisco" tag="Same City" />
        <InfoItem
          icon="industry"
          text="Information Technology"
          tag="Same Industry"
        />
        <InfoItem icon="business" text="B2B" />
        <InfoItem
          icon="school"
          text="University of Warwick"
          tag="Same Law School"
        />
        <InfoItem icon="company" text="Public" />
        <InfoItem icon="year" text="Working in-house since 2006" />
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <TagSection
          title="Law firms Oscar's worked at"
          tags={["Helibut LLP", "Nixon Peabody"]}
        />
        <TagSection
          title="Areas Oscar oversees in addition to legal"
          tags={["Business Dev", "Human Resource"]}
        />
        <TagSection
          title="Special interest groups"
          tags={["AI Legal", "Automation"]}
        />
      </div>
    </div>
  );
};

type InfoItemProps = {
  icon: string;
  text: string;
  tag?: string;
};

const InfoItem = ({ icon, text, tag }: InfoItemProps) => (
  <div className="justify-start items-center gap-2 inline-flex">
    <div className={`w-3 h-3 ${icon}outline`} />
    <div className="text-neutral-700 text-[13px] leading-tight">{text}</div>
    {tag && (
      <div className="px-1 py-0.5 rounded border border-stone-400 justify-start items-center gap-2.5 flex">
        <div className="text-stone-400 text-[11px] font-semibold leading-none">
          {tag}
        </div>
      </div>
    )}
  </div>
);

type TagSectionProps = {
  title: string;
  tags: string[];
};

const TagSection = ({ title, tags }: TagSectionProps) => (
  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
    <div className="text-neutral-700 text-[13px] font-medium leading-tight">
      {title}
    </div>
    <div className="justify-start items-start gap-2 inline-flex">
      {tags.map((tag, index) => (
        <Button
          key={index}
          variant="secondary"
          className="px-4 py-3 bg-zinc-100 rounded-[99px] text-center text-neutral-700 text-[11px] font-semibold leading-none"
        >
          {tag}
        </Button>
      ))}
    </div>
  </div>
);

export default ProfileContent;
