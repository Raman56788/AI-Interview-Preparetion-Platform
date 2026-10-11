import {
  FaMicrophone,
  FaFileLines,
  FaCode,
  FaChartLine,
  FaArrowTrendUp,
  FaBrain,
  FaFire,
  FaCircleCheck,
} from "react-icons/fa6";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIRecommendation from "../../components/dashboard/AIRecommendation";
import ProgressCard from "../../components/dashboard/ProgressCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6">

      {/* ================= HERO BANNER ================= */}
      <WelcomeBanner name="Raman" />

      {/* ================= DASHBOARD OVERVIEW ================= */}
      <section className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest">
              AI Interview Dashboard
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Dashboard Overview
            </h2>

            <p className="text-gray-500 mt-2">
              Monitor your interview preparation, resume score, coding practice
              and overall AI performance.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 font-semibold shadow-sm w-fit">
            <FaArrowTrendUp />
            Improving this week
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

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
            icon={<FaFileLines />}
            color="blue"
          />

          <StatsCard
            title="Coding Score"
            value="84%"
            subtitle="126 Problems Solved"
            icon={<FaCode />}
            color="purple"
          />

          <StatsCard
            title="Overall Rank"
            value="#24"
            subtitle="Top 5% Students"
            icon={<FaChartLine />}
            color="orange"
          />

        </div>
      </section>

      {/* ================= AI RECOMMENDATION + PROGRESS ================= */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

        <AIRecommendation />

        <ProgressCard />

      </section>

      {/* ================= QUICK ACTIONS ================= */}
      <section className="mt-10">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <FaBrain className="text-xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Quick Actions
            </h2>

            <p className="text-gray-500 text-sm">
              Continue your interview preparation with one click.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <QuickActionCard
            title="Start Interview"
            description="Practice AI Mock Interviews with Gemini AI."
            icon={<FaMicrophone />}
            to="/interview"
            color="green"
          />

          <QuickActionCard
            title="Resume Analyzer"
            description="Improve ATS Resume Score instantly."
            icon={<FaFileLines />}
            to="/resume"
            color="blue"
          />

          <QuickActionCard
            title="Coding Practice"
            description="Solve Java, SQL and DSA interview questions."
            icon={<FaCode />}
            to="/coding"
            color="purple"
          />

          <QuickActionCard
            title="Analytics Report"
            description="Track Interview performance and AI scores."
            icon={<FaChartLine />}
            to="/analytics"
            color="orange"
          />

        </div>

      </section>

      {/* ================= PERFORMANCE SUMMARY ================= */}
      <section className="mt-10 bg-white rounded-3xl border border-green-100 shadow-lg p-7">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest">
              AI Insights
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Performance Summary
            </h2>

            <p className="text-gray-500 mt-2">
              AI generated interview performance insights for your preparation.
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
            Updated Today
          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Strong Skill */}
          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white text-xl mb-4">
              <FaCircleCheck />
            </div>

            <p className="text-green-600 font-semibold text-sm">
              STRONGEST SKILL
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-2">
              React & Frontend
            </h3>

            <p className="text-gray-500 mt-3 leading-6">
              Consistently high performance in React, HTML, CSS and JavaScript
              interview rounds.
            </p>

          </div>

          {/* AI Suggestion */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-xl mb-4">
              <FaBrain />
            </div>

            <p className="text-blue-600 font-semibold text-sm">
              AI RECOMMENDATION
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-2">
              Practice SQL & DBMS
            </h3>

            <p className="text-gray-500 mt-3 leading-6">
              Improve JOINs, Subqueries, Normalization and DBMS interview
              concepts for HCLTech and placement preparation.
            </p>

          </div>

          {/* Streak */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-6 hover:shadow-lg transition">

            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-xl mb-4">
              <FaFire />
            </div>

            <p className="text-orange-600 font-semibold text-sm">
              CURRENT STREAK
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-2">
              7 Days 🔥
            </h3>

            <p className="text-gray-500 mt-3 leading-6">
              Maintain your daily interview practice streak to keep improving AI
              interview performance.
            </p>

          </div>

        </div>
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <section className="mt-10">
        <RecentActivity />
      </section>

    </div>
  );
};

export default Dashboard;