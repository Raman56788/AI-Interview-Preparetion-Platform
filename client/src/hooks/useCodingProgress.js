import { useEffect, useMemo, useState } from "react";

import { codingPhases } from "../data/codingRoadmap";
import { loadProgress, saveProgress } from "../utils/localStorage";

// Prepare all problems with phase information
const initialProblems = codingPhases.flatMap((phase) =>
  phase.problems.map((problem) => ({
    ...problem,
    phaseId: phase.id,
    progressKey: `${phase.id}-${problem.id}`,
  }))
);

const useCodingProgress = () => {
  const [problems, setProblems] = useState(initialProblems);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved progress
  useEffect(() => {
    try {
      const saved = loadProgress();

      if (saved && saved.length > 0) {
        const mergedProblems = initialProblems.map((problem) => {
          const savedProblem = saved.find(
            (item) =>
              item.progressKey === problem.progressKey ||
              (
                item.phaseId === problem.phaseId &&
                item.id === problem.id
              )
          );

          return savedProblem
            ? {
                ...problem,
                status: savedProblem.status || "pending",
              }
            : {
                ...problem,
                status: problem.status || "pending",
              };
        });

        setProblems(mergedProblems);
      }
    } catch (error) {
      console.error("Error loading coding progress:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save progress whenever problems change
  useEffect(() => {
    if (!isLoaded) return;

    try {
      saveProgress(problems);
    } catch (error) {
      console.error("Error saving coding progress:", error);
    }
  }, [problems, isLoaded]);

  // Solved problems count
  const solvedCount = useMemo(
    () =>
      problems.filter(
        (problem) => problem.status === "completed"
      ).length,
    [problems]
  );

  // Pending problems count
  const pendingCount = problems.length - solvedCount;

  // Overall progress
  const progressPercentage = useMemo(() => {
    if (problems.length === 0) return 0;

    return Math.round(
      (solvedCount / problems.length) * 100
    );
  }, [solvedCount, problems.length]);

  // Toggle solved / pending
  const toggleSolved = (phaseId, problemId) => {
    setProblems((prevProblems) =>
      prevProblems.map((problem) => {
        const isTarget =
          problem.phaseId === phaseId &&
          problem.id === problemId;

        if (!isTarget) return problem;

        return {
          ...problem,
          status:
            problem.status === "completed"
              ? "pending"
              : "completed",
        };
      })
    );
  };

  // Phase-wise progress
  const phaseProgress = useMemo(() => {
    return codingPhases.map((phase) => {
      const phaseProblems = problems.filter(
        (problem) => problem.phaseId === phase.id
      );

      const solved = phaseProblems.filter(
        (problem) => problem.status === "completed"
      ).length;

      const total = phaseProblems.length;

      return {
        phaseId: phase.id,
        solved,
        total,
        percentage:
          total === 0
            ? 0
            : Math.round((solved / total) * 100),
      };
    });
  }, [problems]);

  return {
    problems,
    solvedCount,
    pendingCount,
    progressPercentage,
    phaseProgress,
    toggleSolved,
  };
};

export default useCodingProgress;