import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfo from "../../components/profile/PersonalInfo";
import EducationCard from "../../components/profile/EducationCard";
import SkillsCard from "../../components/profile/SkillsCard";
import ProjectsCard from "../../components/profile/ProjectsCard";
import CertificateCard from "../../components/profile/CertificateCard";
import AchievementCard from "../../components/profile/AchievementCard";
import EditProfileButton from "../../components/profile/EditProfileButton";

const Profile = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <ProfileHeader />

      <div className="grid xl:grid-cols-2 gap-6 mt-8">

        <PersonalInfo />

        <EducationCard />

        <SkillsCard />

        <ProjectsCard />

        <CertificateCard />

        <AchievementCard />

      </div>

      <div className="mt-8">

        <EditProfileButton />

      </div>

    </div>

  );

};

export default Profile;