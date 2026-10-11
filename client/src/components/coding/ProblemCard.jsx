import {
  FaCircleCheck,
  FaClock,
  FaExternalLinkAlt,
  FaCheck,
} from "react-icons/fa";
import { FaFire } from "react-icons/fa6";

const ProblemCard = ({ problem, onToggleSolved }) => {
  const isSolved = problem.status === "completed";

  // Exact link from roadmap data if available
  // Otherwise generate link from problem name
  const leetCodeLink =
    problem.link ||
    `https://leetcode.com/problems/${problem.name
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-")}/`;

  const handleToggleSolved = (e) => {
    e.stopPropagation();

    onToggleSolved(problem.phaseId, problem.id);
  };

  const openProblem = () => {
    window.open(leetCodeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={openProblem}
      className={`rounded-3xl p-5 border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSolved
          ? "bg-green-50 border-green-300"
          : "bg-white border-gray-200 hover:border-green-300"
      }`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
            LeetCode #{problem.id}
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-1">
            {problem.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Topic :{" "}
            <span className="font-medium">{problem.topic}</span>
          </p>
        </div>

        {/* Difficulty */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            problem.difficulty === "Easy"
              ? "bg-green-100 text-green-700"
              : problem.difficulty === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {problem.difficulty}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mt-4">
        {isSolved ? (
          <>
            <FaCircleCheck className="text-green-600" />

            <span className="text-green-700 text-sm font-semibold">
              Solved
            </span>
          </>
        ) : (
          <>
            <FaClock className="text-orange-500" />

            <span className="text-orange-600 text-sm font-semibold">
              Pending
            </span>
          </>
        )}
      </div>

      {/* XP + Time */}
      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-xl text-orange-700 font-medium">
          <FaFire />
          +10 XP
        </div>

        <div className="bg-gray-100 px-3 py-2 rounded-xl text-gray-600 font-medium">
          ⏱ 20 Min
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {/* Mark Solved */}
        <button
          onClick={handleToggleSolved}
          className={`py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition ${
            isSolved
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
        >
          {isSolved ? (
            <>
              <FaCheck />
              Solved
            </>
          ) : (
            <>
              <FaCircleCheck />
              Mark Solved
            </>
          )}
        </button>

        {/* Solve */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openProblem();
          }}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold flex justify-center items-center gap-2 transition"
        >
          Solve
          <FaExternalLinkAlt size={13} />
        </button>
      </div>

      {/* Click hint */}
      <p className="text-center text-xs text-gray-400 mt-3">
        Click anywhere on the card to open the problem
      </p>
    </div>
  );
};

export default ProblemCard;