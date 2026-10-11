import { useMemo, useState } from "react";

import ProblemCard from "./ProblemCard";
import SearchFilter from "./SearchFilter";
import useCodingProgress from "../../hooks/useCodingProgress";

const ProblemsList = () => {
  // ---------------- Search & Filters ----------------
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");

  // ---------------- Coding Progress Hook ----------------
  const {
    problems,
    solvedCount,
    pendingCount,
    progressPercentage,
    toggleSolved,
  } = useCodingProgress();

  // ---------------- Topic List ----------------
  const topics = [...new Set(problems.map((p) => p.topic))].sort();

  // ---------------- Filter Logic ----------------
  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchSearch =
        problem.name.toLowerCase().includes(search.toLowerCase()) ||
        problem.id.toString().includes(search);

      const matchDifficulty =
        difficulty === "All" || problem.difficulty === difficulty;

      const matchTopic =
        topic === "All" || problem.topic === topic;

      return matchSearch && matchDifficulty && matchTopic;
    });
  }, [search, difficulty, topic, problems]);

  return (
    <div className="mt-10 space-y-8">
      {/* ================= Search & Filters ================= */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        topic={topic}
        setTopic={setTopic}
        topics={topics}
      />

      {/* ================= Progress Summary ================= */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* Solved */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-5 border border-green-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600">
            Solved Problems
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            {solvedCount}
          </h2>

          <p className="text-sm text-green-700 mt-2">
            Great job! Keep practicing every day 🚀
          </p>
        </div>

        {/* Pending */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-5 border border-orange-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600">
            Pending Problems
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            {pendingCount}
          </h2>

          <p className="text-sm text-orange-700 mt-2">
            Remaining problems for placement preparation.
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-5 border border-blue-200 shadow-sm">
          <p className="text-sm font-medium text-gray-600">
            Overall Progress
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-3">
            {progressPercentage}%
          </h2>

          <div className="w-full h-3 rounded-full bg-blue-200 overflow-hidden mt-4">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <p className="text-sm text-blue-700 mt-2">
            {solvedCount} / {problems.length} Problems Completed
          </p>
        </div>
      </div>

      {/* ================= Heading ================= */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            ALL PROBLEMS
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            Coding Practice Library
          </h2>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          {filteredProblems.length} Problems Found
        </span>
      </div>

      {/* ================= Problems Grid ================= */}
      <div className="grid lg:grid-cols-2 gap-5">
        {filteredProblems.map((problem) => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            onToggleSolved={toggleSolved}
          />
        ))}
      </div>

      {/* ================= Empty State ================= */}
      {filteredProblems.length === 0 && (
        <div className="bg-gray-50 rounded-3xl border p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-700">
            No Problems Found 😕
          </h3>

          <p className="text-gray-500 mt-3">
            Try changing the search text or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProblemsList;