// import Activity from "@/components/activity";
// import LeftContentWrapper from "@/components/left-content-wrapper";
// import ProfileContent from "@/components/profile-content";
// import ProfileHeader from "@/components/profile-header";
import StatusTitle from "@/components/status-title";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <StatusTitle
        title="Founding Member"
        description="Click 'Accept' below, and the title will be applied to your profile, as seen below."
        userName="Oscar Martinez"
        userRole="GC @ Dunder Mifflin"
        // userImage="https://via.placeholder.com/48x48"
      />
    </div>
    // <LeftContentWrapper />
    // <>
    //   <ProfileHeader />
    //   <ProfileContent />
    //   <Activity />
    // </>
  );
}
