import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaTrash,
  FaCheckCircle,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { uploadResume, analyzeResume } from "../../services/resumeService";

const UploadResumeCard = ({ setResumeData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  // ================= Choose PDF =================
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("❌ Please upload only PDF files.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("❌ Maximum file size is 5MB.");
      return;
    }

    setSelectedFile(file);
    setAtsScore(null);

    if (setResumeData) {
      setResumeData(null);
    }
  };

  // ================= Upload + Analyze =================
  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please choose a PDF resume first.");
      return;
    }

    try {
      setUploading(true);

      console.log("📄 Selected File:", selectedFile);

      // STEP 1 Upload
      const uploadResult = await uploadResume(selectedFile);
      console.log("✅ Upload Result:", uploadResult);

      // STEP 2 Analyze
      const analyzeResult = await analyzeResume(selectedFile);
      console.log("🤖 Analyze Result:", analyzeResult);

      if (!analyzeResult.success) {
        throw new Error(analyzeResult.message);
      }

      setAtsScore(analyzeResult.analysis.atsScore);

      if (setResumeData) {
        setResumeData(analyzeResult.analysis);
      }

      alert("✅ Resume analyzed successfully!");
    } catch (error) {
      console.error("Resume Error:", error);

      // Show backend message
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Resume upload failed.";

      alert(message);
    } finally {
      setUploading(false);
    }
  };

  // ================= Remove PDF =================
  const removeResume = () => {
    setSelectedFile(null);
    setAtsScore(null);

    if (setResumeData) {
      setResumeData(null);
    }
  };

  return (
    <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-6">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
          AI Resume Analyzer
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Upload Your Resume
        </h2>

        <p className="text-gray-500 mt-2">
          Upload your PDF resume and get ATS score with AI-powered suggestions.
        </p>
      </div>

      {/* Upload Box */}
      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-green-300 rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10 text-center hover:border-green-500 transition-all">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <FaCloudUploadAlt className="text-4xl text-green-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-6">
            Drag & Drop Resume Here
          </h3>

          <p className="text-gray-500 mt-2">
            PDF Only • Maximum File Size 5 MB
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
            <FaCloudUploadAlt />
            Choose PDF Resume
          </div>

          <input
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={handleFile}
          />
        </div>
      </label>

      {/* Selected PDF */}
      {selectedFile ? (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
              <FaFilePdf className="text-red-600 text-2xl" />
            </div>

            <div>
              <p className="font-semibold text-gray-800">{selectedFile.name}</p>

              <p className="text-sm text-green-600 flex items-center gap-2 mt-1">
                <FaCheckCircle />
                PDF Selected Successfully
              </p>

              <p className="text-xs text-gray-500">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>

          <button
            onClick={removeResume}
            className="text-red-500 hover:text-red-600 text-xl"
          >
            <FaTrash />
          </button>
        </div>
      ) : (
        <div className="mt-6 text-center text-gray-500">
          No PDF Selected
        </div>
      )}

      {/* ATS Score */}
      {atsScore && (
        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-green-700 font-semibold">
                Resume Analyzed Successfully
              </p>

              <h3 className="text-4xl font-bold text-green-600 mt-2">
                {atsScore}/100
              </h3>

              <p className="text-sm text-gray-500">ATS Resume Score</p>
            </div>

            <FaCheckCircle className="text-5xl text-green-500" />
          </div>

          <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full"
              style={{ width: `${atsScore}%` }}
            />
          </div>
        </div>
      )}

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={!selectedFile || uploading}
        className={`w-full mt-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 ${
          !selectedFile || uploading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
        }`}
      >
        {uploading ? (
          <>
            <FaSpinner className="animate-spin" />
            Uploading & Analyzing...
          </>
        ) : (
          <>
            Analyze Resume with AI
            <FaArrowRight />
          </>
        )}
      </button>
    </div>
  );
};

export default UploadResumeCard;