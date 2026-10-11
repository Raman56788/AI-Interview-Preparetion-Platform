import CodingHero from "../../components/coding/CodingHero";
import SearchBar from "../../components/coding/SearchBar";
import CodingStats from "../../components/coding/CodingStats";
import CodingRoadmap from "../../components/coding/CodingRoadmap";

const CodingPractice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6 space-y-6">

      {/* ================= HERO SECTION ================= */}
      <CodingHero />

      {/* ================= SEARCH SECTION ================= */}
      <SearchBar />

      {/* ================= STATS SECTION ================= */}
      <CodingStats />

      {/* ================= ROADMAP SECTION ================= */}
      <CodingRoadmap />

      {/* ================= 60 DAY PLAN ================= */}
      <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
            PLACEMENT ROADMAP
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            60-Day Coding Preparation Plan
          </h2>

          <p className="text-gray-500 mt-2">
            Complete this roadmap to become placement-ready for HCLTech, TCS,
            Infosys, Accenture, Josh Technology and Software Developer roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["Day 1-7", "Arrays + Strings + Patterns", "bg-green-50 text-green-700"],
            ["Day 8-14", "Two Pointer + HashMap", "bg-blue-50 text-blue-700"],
            ["Day 15-21", "Sliding Window + Prefix Sum", "bg-purple-50 text-purple-700"],
            ["Day 22-28", "Binary Search + Sorting", "bg-orange-50 text-orange-700"],
            ["Day 29-35", "Stack + Queue + Linked List", "bg-pink-50 text-pink-700"],
            ["Day 36-42", "Trees + Heap + BST", "bg-indigo-50 text-indigo-700"],
            ["Day 43-50", "Graphs + BFS + DFS", "bg-cyan-50 text-cyan-700"],
            ["Day 51-60", "DP + Greedy + Backtracking + Mock Tests", "bg-emerald-50 text-emerald-700"],
          ].map(([day, topic, color]) => (
            <div
              key={day}
              className={`rounded-2xl border p-4 hover:shadow-md transition ${color}`}
            >
              <p className="font-bold text-lg">{day}</p>
              <p className="text-sm mt-2">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= COMPANY PRACTICE ================= */}
      <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
            COMPANY WISE PRACTICE
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Placement Coding Topics
          </h2>

          <p className="text-gray-500 mt-2">
            Practice company-specific DSA patterns for coding rounds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            {
              company: "HCLTech",
              topics: "Arrays • Strings • Sliding Window • SQL",
              color: "from-green-500 to-green-700",
            },
            {
              company: "TCS",
              topics: "Arrays • Matrix • Sorting • Searching",
              color: "from-blue-500 to-blue-700",
            },
            {
              company: "Infosys",
              topics: "Strings • Stack • Queue • Trees",
              color: "from-purple-500 to-purple-700",
            },
            {
              company: "Accenture",
              topics: "HashMap • Binary Search • DP Basics",
              color: "from-orange-500 to-orange-700",
            },
          ].map((item) => (
            <div
              key={item.company}
              className={`rounded-3xl bg-gradient-to-r ${item.color} text-white p-6 shadow-lg`}
            >
              <h3 className="text-xl font-bold">{item.company}</h3>

              <p className="text-sm mt-3 text-white/90">{item.topics}</p>

              <button className="mt-5 w-full bg-white text-gray-800 font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DSA MASTER COURSE ================= */}
      <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
            DSA MASTER COURSE
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Learn DSA from Basics to Advanced
          </h2>

          <p className="text-gray-500 mt-2">
            Same teaching style we use for LeetCode: Hindi + English + Java +
            Dry Run + Time Complexity.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Day 1 — Time Complexity + Space Complexity + Big O",
            "Day 2 — Arrays (25 Interview Problems)",
            "Day 3 — Strings (20 Interview Problems)",
            "Day 4 — Two Pointer",
            "Day 5 — Sliding Window",
            "Day 6 — HashMap + Prefix Sum",
            "Day 7 — Binary Search",
            "Day 8 — Stack & Queue",
            "Day 9 — Linked List",
            "Day 10 — Trees + BST",
            "Day 11 — Heap + Priority Queue",
            "Day 12 — Graph (DFS / BFS)",
            "Day 13 — Dynamic Programming",
            "Day 14 — Backtracking + Mock Test",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-green-50 rounded-2xl border border-green-100 p-4 hover:bg-green-100 transition"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="rounded-[30px] bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white p-8 shadow-xl">
        <p className="uppercase tracking-[4px] text-green-100 text-xs font-semibold">
          AI INTERVIEW PREPARATION PLATFORM
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Coding Practice Dashboard
        </h2>

        <p className="text-green-100 mt-3 max-w-3xl leading-7">
          This module will contain 450+ LeetCode & GFG interview problems,
          company-wise coding sheets, AI explanations, Java solutions, progress
          tracker, daily challenge, revision tracker, and mock coding contests.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">450+</h3>
            <p className="text-sm text-green-100">Problems</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">13</h3>
            <p className="text-sm text-green-100">Phases</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">60</h3>
            <p className="text-sm text-green-100">Day Plan</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">Java</h3>
            <p className="text-sm text-green-100">Primary Language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPractice;