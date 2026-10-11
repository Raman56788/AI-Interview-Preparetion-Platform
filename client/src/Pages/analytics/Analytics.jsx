import { useEffect, useState } from "react";

import {
  FaChartLine,
  FaChartPie,
  FaBrain,
  FaFire,
  FaArrowTrendUp,
  FaUserGraduate,
  FaClock,
  FaCircleCheck,
  FaBullseye,
  FaCode,
} from "react-icons/fa6";

import AnalyticsCard from "../../components/analytics/AnalyticsCard";
import ScoreLineChart from "../../components/analytics/ScoreLineChart";
import SkillPieChart from "../../components/analytics/SkillPieChart";
import PerformanceBarChart from "../../components/analytics/PerformanceBarChart";
import HistoryTable from "../../components/analytics/HistoryTable";

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    totalInterviews: 12,
    averageScore: 89,
    bestScore: 97,
    completionRate: "92%",
  });

  const [userName] = useState("Raman");

  useEffect(() => {
    const history =
      JSON.parse(localStorage.getItem("interviewHistory")) || [];

    if (history.length > 0) {
      const scores = history.map((item) => item.overallScore || 90);

      const average = Math.round(
        scores.reduce((a, b) => a + b, 0) / scores.length
      );

      setAnalytics({
        totalInterviews: history.length,
        averageScore: average,
        bestScore: Math.max(...scores),
        completionRate: "96%",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-green-950 rounded-b-[40px] shadow-2xl px-8 py-10">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left */}
          <div>
            <p className="uppercase tracking-[5px] text-green-400 text-sm font-semibold">
              AI INTERVIEW ANALYTICS
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Welcome Back,
              <span className="text-green-400"> {userName} 👋</span>
            </h1>

            <p className="text-gray-300 mt-5 leading-8 max-w-2xl">
              Track your AI Interview performance, technical knowledge,
              communication, confidence and weekly progress through intelligent
              analytics powered by MERN Stack + Gemini AI.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">

              <div className="flex items-center gap-2 text-gray-300">
                <FaClock className="text-green-400" />
                Updated Today
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <FaCircleCheck className="text-green-400" />
                Gemini AI Insights Enabled
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl rounded-3xl border border-green-500/20 p-6">

            <p className="text-green-300 text-sm mb-2">
              Overall AI Performance
            </p>

            <h2 className="text-6xl font-bold text-green-400">
              {analytics.averageScore}
            </h2>

            <p className="text-gray-300 mt-2">
              Average Interview Score
            </p>

            <div className="mt-6 bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full"
                style={{ width: `${analytics.averageScore}%` }}
              />
            </div>

            <div className="flex justify-between text-xs mt-2 text-gray-400">
              <span>0%</span>
              <span>100%</span>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <div>
                <p className="text-gray-400">Best</p>
                <p className="text-purple-400 font-bold">
                  {analytics.bestScore}%
                </p>
              </div>

              <div>
                <p className="text-gray-400">Completion</p>
                <p className="text-orange-400 font-bold">
                  {analytics.completionRate}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-5 py-8 space-y-8">

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <AnalyticsCard
            title="Total Interviews"
            value={analytics.totalInterviews}
            icon={<FaBrain />}
            color="green"
            change="+4 This Week"
          />

          <AnalyticsCard
            title="Average Score"
            value={`${analytics.averageScore}%`}
            icon={<FaChartLine />}
            color="blue"
            change="+6% Improvement"
          />

          <AnalyticsCard
            title="Best Score"
            value={`${analytics.bestScore}%`}
            icon={<FaFire />}
            color="purple"
            change="New Record"
          />

          <AnalyticsCard
            title="Completion Rate"
            value={analytics.completionRate}
            icon={<FaUserGraduate />}
            color="orange"
            change="+12%"
          />

        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <ScoreLineChart />
          </div>

          <div>
            <SkillPieChart />
          </div>

        </div>

        {/* Performance Chart */}
        <PerformanceBarChart />

        {/* AI Recommendation Section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-green-950 rounded-3xl border border-green-500/20 shadow-2xl p-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-3xl">
              <FaBrain />
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-green-400 text-xs">
                Gemini AI Career Insights
              </p>

              <h2 className="text-3xl font-bold">
                Personalized AI Recommendation
              </h2>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-white/5 border border-green-500/20 rounded-2xl p-5">

              <FaCode className="text-green-400 text-2xl mb-3" />

              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Strongest Skill
              </h3>

              <p className="text-gray-300 text-sm leading-6">
                React, JavaScript and Frontend concepts are consistently scoring
                above 90% in AI interviews.
              </p>

            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-2xl p-5">

              <FaBullseye className="text-yellow-400 text-2xl mb-3" />

              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Focus Area
              </h3>

              <p className="text-gray-300 text-sm leading-6">
                Improve communication fluency, SQL query explanations and project
                storytelling for placement interviews.
              </p>

            </div>

            <div className="bg-white/5 border border-blue-500/20 rounded-2xl p-5">

              <FaArrowTrendUp className="text-blue-400 text-2xl mb-3" />

              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Weekly Goal
              </h3>

              <p className="text-gray-300 text-sm leading-6">
                Complete 3 AI mock interviews, revise DBMS + React Hooks and
                practice HR interview questions this week.
              </p>

            </div>

          </div>

          {/* Weekly Progress */}
          <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-green-500/10">

            <div className="flex justify-between mb-3">
              <span className="text-green-400 font-semibold">
                Weekly Goal Progress
              </span>

              <span className="font-bold text-white">75%</span>
            </div>

            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                style={{ width: "75%" }}
              />
            </div>

            <p className="text-gray-400 text-sm mt-3">
              3 of 4 planned interviews completed this week.
            </p>

          </div>

        </div>

        {/* History Table */}
        <HistoryTable />

        {/* Footer Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl p-5 text-center">
            <p className="text-gray-400 text-sm">Practice Hours</p>

            <h2 className="text-3xl font-bold text-green-400 mt-2">
              18h
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-2xl p-5 text-center">
            <p className="text-gray-400 text-sm">Mock Interviews</p>

            <h2 className="text-3xl font-bold text-blue-400 mt-2">
              {analytics.totalInterviews}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-5 text-center">
            <p className="text-gray-400 text-sm">Highest Score</p>

            <h2 className="text-3xl font-bold text-purple-400 mt-2">
              {analytics.bestScore}%
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-2xl p-5 text-center">
            <p className="text-gray-400 text-sm">Completion</p>

            <h2 className="text-3xl font-bold text-orange-400 mt-2">
              {analytics.completionRate}
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Analytics;