import axios from "axios";

// Backend API
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically add JWT Token in every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ===============================
// Generate AI Interview Questions
// ===============================
export const generateQuestions = async (role, level) => {
  const response = await API.post("/interview/questions", {
    role,
    level,
  });

  return response.data;
};

// ===============================
// Evaluate AI Interview Answers
// ===============================
export const evaluateInterview = async (interviewData) => {
  const response = await API.post(
    "/interview/evaluate",
    interviewData
  );

  return response.data;
};

export default API;