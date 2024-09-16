"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { useRouter } from "next/navigation";

type StatusTitleProps = {
  title: string;
  description: string;
  userName: string;
  userRole: string;
  userImage?: string;
};

export default function StatusTitle({
  title,
  description,
  userName,
  userRole,
  userImage,
}: StatusTitleProps) {
  const router = useRouter();

  const handleAccept = () => {
    router.push("/tag");
  };

  return (
    <div className="w-[480px] h-[423px] p-2 bg-yellow-600 rounded-[20px] flex flex-col items-center gap-2">
      <div className="w-full h-[67px] py-2 flex flex-col items-start gap-1">
        <h2 className="w-full text-center text-white text-lg font-semibold leading-[27px]">
          Exclusive Recognition
        </h2>
        <p className="w-full text-center text-white text-[13px] leading-tight">
          You&apos;ve been awarded the title of
        </p>
      </div>

      <Card className="w-full h-[332px] p-5 bg-white border-zinc-300 flex flex-col justify-center items-center gap-4">
        <CardHeader className="p-0">
          <CardTitle className="w-full text-center text-[42px] font-semibold leading-[50.40px]">
            <AnimatedShinyText shimmerWidth={200}>{title}</AnimatedShinyText>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex flex-col items-center gap-6">
          <div className="w-[302px] text-center text-stone-500 text-[15px] font-medium leading-snug">
            {description}
          </div>

          <div className="px-3 py-2 bg-white rounded-lg shadow border border-zinc-100 flex items-center gap-4">
            <Avatar className="w-12 h-12 border border-black/5">
              <AvatarImage src={userImage} alt={userName} />
              <AvatarFallback>{"OM"}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="pb-1">
                <p className="text-neutral-700 text-[15px] font-medium leading-snug">
                  {userName}
                </p>
                <p className="text-neutral-700 text-[13px] leading-tight">
                  {userRole}
                </p>
              </div>
              <Badge
                variant="secondary"
                className="px-1.5 py-0.5 bg-zinc-100 border-zinc-300 text-stone-500 text-[11px] font-medium"
              >
                {title}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              className="px-4 py-2.5 bg-green-700 hover:bg-green-800 rounded-3xl text-white text-[13px] font-semibold leading-tight"
              onClick={handleAccept}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2.5 rounded-3xl border border-neutral-700 text-neutral-700 text-[13px] font-semibold leading-tight"
            >
              No thanks
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
