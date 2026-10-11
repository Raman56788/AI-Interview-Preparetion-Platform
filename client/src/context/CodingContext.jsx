import { createContext, useContext, useState } from "react";
import { codingPhases as roadmapData } from "../data/codingRoadmap";

const CodingContext = createContext();

export const CodingProvider = ({ children }) => {
  const [codingPhases, setCodingPhases] = useState(roadmapData);

  // Count solved problems
  const solvedProblems = codingPhases.reduce((total, phase) => {
    return (
      total +
      phase.problems.filter((problem) => problem.status === "completed").length
    );
  }, 0);

  // Count pending problems
  const totalProblems = codingPhases.reduce(
    (total, phase) => total + phase.totalProblems,
    0
  );

  const pendingProblems = totalProblems - solvedProblems;

  // Mark problem solved
  const markProblemSolved = (phaseId, problemId) => {
    const updated = codingPhases.map((phase) => {
      if (phase.id !== phaseId) return phase;

      const updatedProblems = phase.problems.map((problem) =>
        problem.id === problemId
          ? { ...problem, status: "completed" }
          : problem
      );

      const progress = updatedProblems.filter(
        (p) => p.status === "completed"
      ).length;

      return {
        ...phase,
        problems: updatedProblems,
        progress,
      };
    });

    setCodingPhases(updated);
  };

  return (
    <CodingContext.Provider
      value={{
        codingPhases,
        solvedProblems,
        pendingProblems,
        totalProblems,
        markProblemSolved,
      }}
    >
      {children}
    </CodingContext.Provider>
  );
};

export const useCoding = () => useContext(CodingContext);