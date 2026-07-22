import {
  FaMicrophone,
  FaFileAlt,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";
import RecentActivity from "../../components/dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <WelcomeBanner name="Raman" />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <StatsCard
          title="Interview Score"
          value="92%"
          subtitle="+12% this week"
          icon={<FaMicrophone />}
          color="green"
        />

        <StatsCard
          title="Resume Score"
          value="88%"
          subtitle="ATS Optimized"
          icon={<FaFileAlt />}
          color="blue"
        />

        <StatsCard
          title="Coding Score"
          value="84%"
          subtitle="+6 Problems"
          icon={<FaCode />}
          color="purple"
        />

        <StatsCard
          title="Overall Rank"
          value="#24"
          subtitle="Top 5%"
          icon={<FaChartLine />}
          color="orange"
        />

      </div>

      {/* Quick Actions */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <QuickActionCard
          title="Start Interview"
          description="Practice AI mock interviews"
          icon={<FaMicrophone />}
          to="/interview"
          color="green"
        />

        <QuickActionCard
          title="Resume Analyzer"
          description="Improve your ATS Score"
          icon={<FaFileAlt />}
          to="/resume"
          color="blue"
        />

        <QuickActionCard
          title="Coding Practice"
          description="Solve coding challenges"
          icon={<FaCode />}
          to="/coding"
          color="purple"
        />

      </div>

      {/* Activity */}

      <div className="mt-8">
        <RecentActivity />
      </div>

    </div>
  );
};

export default Dashboard;