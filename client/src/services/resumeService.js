import axios from "axios";

// ==============================================
// Backend Base URL
// ==============================================
const API = axios.create({
  baseURL: "http://localhost:5000/api/resume",
  timeout: 30000,
});

// ==============================================
// Upload Resume API
// ==============================================
export const uploadResume = async (file) => {
  try {
    const formData = new FormData();
    formData.append("resume", file);

    const { data } = await API.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("✅ Upload Success:", data);
    return data;
  } catch (error) {
    console.error("❌ Resume Upload Error:", error.response?.data || error);

    throw (
      error.response?.data || {
        success: false,
        message: "Resume upload failed.",
      }
    );
  }
};

// ==============================================
// Analyze Resume API (Gemini ATS)
// ==============================================
export const analyzeResume = async (file) => {
  try {
    const formData = new FormData();
    formData.append("resume", file);

    const { data } = await API.post("/analyze", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("✅ Analysis Success:", data);
    return data;
  } catch (error) {
    console.error("❌ Resume Analysis Error:", error.response?.data || error);

    throw (
      error.response?.data || {
        success: false,
        message: "Resume analysis failed.",
      }
    );
  }
};