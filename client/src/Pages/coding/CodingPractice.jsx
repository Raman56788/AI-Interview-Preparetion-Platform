
import CodingHero from "../../components/coding/CodingHero";
import SearchBar from "../../components/coding/SearchBar";
import CodingStats from "../../components/coding/CodingStats";
import CodingRoadmap from "../../components/coding/CodingRoadmap";
import DifficultyFilter from "../../components/coding/DifficultyFilter";
import ProblemList from "../../components/coding/ProblemList";
import CodeEditor from "../../components/coding/CodeEditor";
import ProgressCard from "../../components/coding/ProgressCard";

const CodingPractice = () => {
  const plan = [
    ["Day 1-7", "Arrays + Strings + Patterns", "bg-green-50 text-green-700"],
    ["Day 8-14", "Two Pointer + HashMap", "bg-blue-50 text-blue-700"],
    ["Day 15-21", "Sliding Window + Prefix Sum", "bg-purple-50 text-purple-700"],
    ["Day 22-28", "Binary Search + Sorting", "bg-orange-50 text-orange-700"],
    ["Day 29-35", "Stack + Queue + Linked List", "bg-pink-50 text-pink-700"],
    ["Day 36-42", "Trees + Heap + BST", "bg-indigo-50 text-indigo-700"],
    ["Day 43-50", "Graphs + BFS + DFS", "bg-cyan-50 text-cyan-700"],
    ["Day 51-60", "DP + Greedy + Backtracking + Mock Tests", "bg-emerald-50 text-emerald-700"],
  ];

  const companies = [
    { company: "HCLTech", topics: "Arrays • Strings • Sliding Window • SQL", color: "from-green-500 to-green-700" },
    { company: "TCS", topics: "Arrays • Matrix • Sorting • Searching", color: "from-blue-500 to-blue-700" },
    { company: "Infosys", topics: "Strings • Stack • Queue • Trees", color: "from-purple-500 to-purple-700" },
    { company: "Accenture", topics: "HashMap • Binary Search • DP Basics", color: "from-orange-500 to-orange-700" },
  ];

  const topics = [
    "Time Complexity + Space Complexity + Big O",
    "Arrays (25 Interview Problems)",
    "Strings (20 Interview Problems)",
    "Two Pointer",
    "Sliding Window",
    "HashMap + Prefix Sum",
    "Binary Search",
    "Stack & Queue",
    "Linked List",
    "Trees + BST",
    "Heap + Priority Queue",
    "Graph (DFS / BFS)",
    "Dynamic Programming",
    "Backtracking + Mock Test",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6 space-y-6">
      <CodingHero />
      <SearchBar />
      <CodingStats />
      <CodingRoadmap />

      {/* Coding Practice Tools */}
      <section className="bg-white rounded-3xl border border-green-100 shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Practice Coding Problems
        </h2>

        <DifficultyFilter />

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <ProblemList />
          </div>

          <div className="xl:col-span-2 space-y-6">
            <CodeEditor />
            <ProgressCard />
          </div>
        </div>
      </section>

      {/* 60-Day Plan */}
      <section className="bg-white rounded-3xl border border-green-100 shadow-xl p-8">
        <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
          Placement Roadmap
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          60-Day Coding Preparation Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Prepare for coding rounds with a structured DSA learning plan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {plan.map(([day, topic, color]) => (
            <div
              key={day}
              className={`rounded-2xl border p-4 hover:shadow-md transition ${color}`}
            >
              <p className="font-bold text-lg">{day}</p>
              <p className="text-sm mt-2">{topic}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company-wise Practice */}
      <section className="bg-white rounded-3xl border border-green-100 shadow-xl p-8">
        <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
          Company Wise Practice
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Placement Coding Topics
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
          {companies.map((item) => (
            <div
              key={item.company}
              className={`rounded-3xl bg-gradient-to-r ${item.color} text-white p-6 shadow-lg`}
            >
              <h3 className="text-xl font-bold">{item.company}</h3>
              <p className="text-sm mt-3 text-white/90">{item.topics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DSA Master Course */}
      <section className="bg-white rounded-3xl border border-green-100 shadow-xl p-8">
        <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
          DSA Master Course
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Learn DSA from Basics to Advanced
        </h2>
        <p className="text-gray-500 mt-2">
          Learn with Java, dry runs, and time complexity analysis.
        </p>

        <div className="space-y-4 mt-6">
          {topics.map((topic, index) => (
            <div
              key={topic}
              className="flex items-center gap-4 bg-green-50 rounded-2xl border border-green-100 p-4 hover:bg-green-100 transition"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="font-medium text-gray-700">
                Day {index + 1} — {topic}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white p-8 shadow-xl">
        <p className="uppercase tracking-[4px] text-green-100 text-xs font-semibold">
          AI Interview Preparation Platform
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Coding Practice Dashboard
        </h2>
        <p className="text-green-100 mt-3 max-w-3xl leading-7">
          Practice DSA, prepare for company coding rounds, and track your
          progress through a structured learning roadmap.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            ["450+", "Problems"],
            ["13", "Phases"],
            ["60", "Day Plan"],
            ["Java", "Primary Language"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/10 rounded-2xl p-4 text-center"
            >
              <h3 className="text-2xl font-bold">{value}</h3>
              <p className="text-sm text-green-100">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CodingPractice;

