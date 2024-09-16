"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";

type ProfileTagProps = {
  name: string;
  title: string;
  company: string;
  memberType: string;
  followers: number;
  following: number;
  bio: string;
  avatarSrc: string;
};

const ProfileTag = ({
  name,
  title,
  company,
  memberType,
  followers,
  following,
  bio,
  avatarSrc,
}: ProfileTagProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className="w-[840px] p-5 border-b border-zinc-300">
      <CardContent className="flex gap-5 p-0">
        <Avatar className="h-[150px] w-[150px]">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>
            {"OM"}
            {/* {name
              .split(" ")
              .map((n) => n[0])
              .join("")} */}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-neutral-700 text-[15px] font-semibold leading-snug">
                {name}
              </h3>
              <p className="text-neutral-700 text-[13px] leading-tight">
                {title} @ {company}
              </p>
            </div>
            <div
              className={`transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <Badge
                variant="secondary"
                className="w-fit text-[11px] font-medium text-stone-500"
              >
                {memberType}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-[13px]">
              <span>
                <strong className="text-neutral-700">{followers}</strong>
                <span className="text-zinc-400"> Followers</span>
              </span>
              <span>
                <strong className="text-neutral-700">{following}</strong>
                <span className="text-zinc-400"> Following</span>
              </span>
            </div>
            <div className="flex gap-2.5 text-neutral-700">
              <Twitter size={16} />
              <Linkedin size={16} />
            </div>
          </div>
          <p className="text-stone-500 text-[13px] leading-tight">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileTag;
