"use client";

import ProfileTag from "@/components/profile-tag";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function TagPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <ProfileTag
        name="Oscar Martinez"
        title="CFO"
        company="Dunder Mifflin"
        memberType="Founding Member"
        followers={168}
        following={240}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu."
        avatarSrc="/path/to/avatar.jpg"
      />
      <Button
        onClick={handleRetry}
        variant="default"
        className="flex items-center space-x-2"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Retry</span>
      </Button>
    </div>
  );
}
