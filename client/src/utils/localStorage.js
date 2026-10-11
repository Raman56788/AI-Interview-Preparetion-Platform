const STORAGE_KEY = "ai-interview-coding-progress";

// Save coding progress
export const saveProgress = (problems) => {
  try {
    const progressData = problems.map((problem) => ({
      id: problem.id,
      phaseId: problem.phaseId,
      progressKey: problem.progressKey,
      status: problem.status || "pending",
    }));

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progressData)
    );
  } catch (error) {
    console.error("Error saving coding progress:", error);
  }
};

// Load coding progress
export const loadProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    const parsedData = JSON.parse(data);

    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error loading coding progress:", error);
    return [];
  }
};

// Clear all coding progress
export const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing coding progress:", error);
  }
};