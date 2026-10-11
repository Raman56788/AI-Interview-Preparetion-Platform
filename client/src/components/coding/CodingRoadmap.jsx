import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCircleCheck,
  FaClock,
  FaPlay,
  FaCode,
  FaCheck,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

// Context se data aayega
import { useCoding } from "../../context/CodingContext";

const CodingRoadmap = () => {
  const [openPhase, setOpenPhase] = useState(1);

  // Context Values
  const { codingPhases, markProblemSolved } = useCoding();

  return (
    <div className="bg-white rounded-[30px] shadow-xl border border-green-100 p-8 mt-8">
      {/* ================= Heading ================= */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
          DSA ROADMAP
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          13 Phases • 450+ Coding Problems
        </h2>

        <p className="text-gray-500 mt-2">
          Complete this roadmap from Basics to Advanced for HCLTech, TCS,
          Infosys, Accenture, Josh Technology and Product Companies.
        </p>
      </div>

      {/* ================= Phase Cards ================= */}
      <div className="space-y-5">
        {codingPhases.map((phase) => {
          const percentage =
            phase.totalProblems === 0
              ? 0
              : Math.round(
                  (phase.progress / phase.totalProblems) * 100
                );

          const isOpen = openPhase === phase.id;

          return (
            <div
              key={phase.id}
              className="border border-green-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* ================= Phase Header ================= */}
              <button
                type="button"
                onClick={() => setOpenPhase(isOpen ? null : phase.id)}
                className="w-full p-6 flex justify-between items-center bg-gradient-to-r from-green-50 via-white to-white hover:from-green-100 transition"
              >
                <div className="text-left">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    Phase {phase.id}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-800 mt-3">
                    {phase.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {phase.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    <span>📚 {phase.totalProblems} Problems</span>
                    <span>📈 {percentage}% Completed</span>
                  </div>
                </div>

                <div className="text-2xl text-green-600">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {/* ================= Expanded Content ================= */}
              {isOpen && (
                <div className="bg-white px-6 pb-6">
                  {/* ================= Progress ================= */}
                  <div className="mt-5">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>

                      <span>
                        {phase.progress}/{phase.totalProblems}
                      </span>
                    </div>

                    <div className="w-full h-3 rounded-full bg-green-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* ================= Difficulty Cards ================= */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-green-50 rounded-2xl p-3 text-center">
                      <p className="text-xs uppercase text-gray-500">
                        Easy
                      </p>

                      <h3 className="text-xl font-bold text-green-600">
                        {phase.difficulty.easy}
                      </h3>
                    </div>

                    <div className="bg-yellow-50 rounded-2xl p-3 text-center">
                      <p className="text-xs uppercase text-gray-500">
                        Medium
                      </p>

                      <h3 className="text-xl font-bold text-yellow-600">
                        {phase.difficulty.medium}
                      </h3>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-3 text-center">
                      <p className="text-xs uppercase text-gray-500">
                        Hard
                      </p>

                      <h3 className="text-xl font-bold text-red-600">
                        {phase.difficulty.hard}
                      </h3>
                    </div>
                  </div>

                  {/* ================= Problems ================= */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <FaCode className="text-green-600" />

                      <h4 className="font-bold text-gray-800">
                        Problems ({phase.totalProblems})
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.problems.map((problem) => {
                        // codingRoadmap.js me link hai to wahi use hoga.
                        // Agar link nahi hai to problem name se fallback URL banega.
                        const leetCodeLink =
                          problem.link ||
                          `https://leetcode.com/problems/${problem.name
                            .toLowerCase()
                            .replace(/[^a-z0-9 ]/g, "")
                            .replace(/\s+/g, "-")}/`;

                        return (
                          <div
                            key={`${phase.id}-${problem.id}`}
                            className={`flex justify-between items-center p-4 rounded-2xl border transition ${
                              problem.status === "completed"
                                ? "bg-green-50 border-green-300"
                                : "bg-gray-50 hover:bg-green-50 hover:border-green-300"
                            }`}
                          >
                            {/* ================= Problem Info ================= */}
                            <div className="min-w-0">
                              <p className="font-semibold text-gray-800">
                                #{problem.id} {problem.name}
                              </p>

                              <p className="text-sm text-gray-500 mt-1">
                                {problem.topic}
                              </p>

                              {/* ================= Solve Button ================= */}
                              <a
                                href={leetCodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2 rounded-lg font-semibold transition"
                              >
                                <FaArrowUpRightFromSquare />
                                Solve on LeetCode
                              </a>
                            </div>

                            {/* ================= Right Side ================= */}
                            <div className="flex flex-col items-end gap-2 ml-3">
                              {problem.status === "completed" ? (
                                <FaCircleCheck className="text-green-600 text-xl" />
                              ) : (
                                <FaClock className="text-orange-500 text-xl" />
                              )}

                              {/* Difficulty */}
                              <span
                                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                                  problem.difficulty === "Easy"
                                    ? "bg-green-100 text-green-700"
                                    : problem.difficulty === "Medium"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {problem.difficulty}
                              </span>

                              {/* Mark Solved */}
                              {problem.status !== "completed" ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    markProblemSolved(
                                      phase.id,
                                      problem.id
                                    )
                                  }
                                  className="mt-2 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 transition"
                                >
                                  <FaCheck />
                                  Mark Solved
                                </button>
                              ) : (
                                <span className="mt-2 text-xs font-semibold text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                                  ✅ Solved
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* ================= Continue Button ================= */}
                  <button
                    type="button"
                    className="mt-7 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-semibold flex justify-center items-center gap-2 transition"
                  >
                    <FaPlay />
                    Continue Phase
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CodingRoadmap;