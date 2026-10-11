import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa6";

import ProfileStats from "../../components/profile/ProfileStats";
import SkillCard from "../../components/profile/SkillCard";
import EducationCard from "../../components/profile/EducationCard";
import ProgressSection from "../../components/profile/ProgressSection";
import AchievementCard from "../../components/profile/AchievementCard";

import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfo from "../../components/profile/PersonalInfo";
import SkillsCard from "../../components/profile/SkillsCard";
import ProjectsCard from "../../components/profile/ProjectsCard";
import CertificateCard from "../../components/profile/CertificateCard";
import EditProfileButton from "../../components/profile/EditProfileButton";

const Profile = () => {
  const user = {
    name: "Raman Agnihotri",
    role: "MERN Stack Developer",
    college: "Maharana Pratap Group of Institutions",
    university: "AKTU University",
    semester: "B.Tech CSE • 7th Semester",
    location: "Kanpur, Uttar Pradesh",
    email: "raman@example.com",
    phone: "+91 XXXXX XXXXX",
    github: "github.com/Raman56788",
    about:
      "Final-year Computer Science Engineering student passionate about MERN Stack Development, AI Interview Preparation, Java DSA and SQL. Currently building an AI-powered Interview Preparation Platform using React, Tailwind CSS, Node.js, Express, MongoDB and Gemini AI.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6 space-y-8">
      {/* Profile Header */}
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

        <div className="relative p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div className="flex gap-6 items-center flex-col sm:flex-row">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center text-5xl font-bold text-green-600">
                R
              </div>
              <div className="absolute bottom-1 right-1 bg-green-700 text-white p-2 rounded-full shadow-md">
                <FaBriefcase size={14} />
              </div>
            </div>

            <div className="text-white text-center sm:text-left">
              <p className="uppercase tracking-widest text-green-100 text-xs font-semibold">
                AI Interview Platform Profile
              </p>
              <h1 className="text-4xl font-bold mt-2">{user.name}</h1>
              <p className="text-green-100 text-lg mt-1">{user.role}</p>

              <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Available for Internship
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Final Year Student
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <EditProfileButton />

            <button
              type="button"
              onClick={() => window.print()}
              className="bg-green-800/80 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-green-900 transition flex items-center justify-center gap-3"
            >
              <FaDownload />
              Print / Save Profile
            </button>
          </div>
        </div>
      </section>

      {/* Profile Header Component */}
      <ProfileHeader />

      {/* Profile Statistics */}
      <ProfileStats />

      {/* About and Contact */}
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-green-100 shadow-lg p-6">
          <p className="uppercase text-xs tracking-widest text-green-600 font-semibold">
            About Me
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            AI & MERN Developer
          </h2>
          <p className="text-gray-600 leading-8 mt-4">{user.about}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3 items-center bg-green-50 p-4 rounded-xl">
              <FaGraduationCap className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">College</p>
                <h4 className="font-semibold text-gray-800">
                  {user.college}
                </h4>
              </div>
            </div>

            <div className="flex gap-3 items-center bg-green-50 p-4 rounded-xl">
              <FaBriefcase className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <h4 className="font-semibold text-gray-800">
                  {user.semester}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-green-100 shadow-lg p-6">
          <p className="uppercase text-xs tracking-widest text-green-600 font-semibold">
            Contact Information
          </p>
          <h2 className="text-xl font-bold text-gray-800 mt-2">
            Get in Touch
          </h2>

          <div className="space-y-5 mt-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{user.email}</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">{user.phone}</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                <FaLocationDot />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800">{user.location}</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
                <FaGithub />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/Raman56788"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-green-700 hover:underline"
                >
                  {user.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <PersonalInfo />

      {/* Skills and Education */}
      <section className="grid lg:grid-cols-2 gap-6">
        <SkillCard />
        <SkillsCard />
        <EducationCard />
      </section>

      {/* Projects and Certificates */}
      <section className="grid lg:grid-cols-2 gap-6">
        <ProjectsCard />
        <CertificateCard />
      </section>

      {/* Progress */}
      <ProgressSection />

      {/* Achievements */}
      <AchievementCard />
    </div>
  );
};

export default Profile;

