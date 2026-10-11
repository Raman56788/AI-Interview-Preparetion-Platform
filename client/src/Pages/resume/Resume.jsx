import { useState } from "react";

// Resume Components
import UploadResumeCard from "../../components/resume/UploadResumeCard";
import ResumePreview from "../../components/resume/ResumePreview";
import ATSScoreCard from "../../components/resume/ATSScoreCard";
import SkillAnalysis from "../../components/resume/SkillAnalysis";
import SuggestionCard from "../../components/resume/SuggestionCard";

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  // Dynamic Status based on ATS Score
  const getResumeStatus = (score) => {
    if (score >= 90) {
      return {
        title: "Excellent",
        color: "text-green-600",
        bg: "bg-green-100",
      };
    }

    if (score >= 75) {
      return {
        title: "Good",
        color: "text-blue-600",
        bg: "bg-blue-100",
      };
    }

    if (score >= 60) {
      return {
        title: "Average",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };
    }

    return {
      title: "Needs Improvement",
      color: "text-red-600",
      bg: "bg-red-100",
    };
  };

  const status = resumeData
    ? getResumeStatus(resumeData.atsScore)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6">

      {/* ================= Header ================= */}
      <div className="bg-white rounded-[30px] shadow-xl border border-green-100 p-8 mb-8 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-60 h-60 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative">
          <p className="text-xs uppercase tracking-[4px] text-green-600 font-semibold">
            AI RESUME ANALYZER
          </p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Resume ATS Checker
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Upload your resume and receive an AI-powered ATS score,
            detected skills, missing keywords, strengths,
            weaknesses, and personalized improvement suggestions.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              ATS Friendly
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Skill Detection
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              Gemini AI Feedback
            </span>
          </div>
        </div>
      </div>

      {/* ================= Main Content ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="xl:col-span-7 space-y-6">
          <UploadResumeCard setResumeData={setResumeData} />
          <ResumePreview resumeData={resumeData} />
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-5 space-y-6">
          <ATSScoreCard resumeData={resumeData} />
          <SkillAnalysis resumeData={resumeData} />
          <SuggestionCard resumeData={resumeData} />
        </div>
      </div>

      {/* ================= Dynamic Bottom Summary ================= */}
      {resumeData && (
        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[28px] p-6 text-white shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            🎉 Resume Analysis Completed Successfully
          </h2>

          <p className="text-green-100">
            Gemini AI analyzed your resume. Improve the highlighted
            keywords and suggestions to increase your ATS score for
            HCLTech, TCS, Infosys, Accenture and other companies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            {/* ATS Score */}
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <p className="text-sm text-green-100">ATS Score</p>
              <h3 className="text-3xl font-bold">
                {resumeData.atsScore}/100
              </h3>
            </div>

            {/* Skills Count */}
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <p className="text-sm text-green-100">Skills Found</p>
              <h3 className="text-3xl font-bold">
                {resumeData.skills?.length || 0}
              </h3>
            </div>

            {/* Missing Keywords */}
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <p className="text-sm text-green-100">Missing Keywords</p>
              <h3 className="text-3xl font-bold">
                {resumeData.missingKeywords?.length || 0}
              </h3>
            </div>

            {/* Suggestions */}
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <p className="text-sm text-green-100">Suggestions</p>
              <h3 className="text-3xl font-bold">
                {resumeData.suggestions?.length || 0}
              </h3>
            </div>
          </div>

          {/* Resume Status */}
          <div className="mt-6 flex flex-wrap gap-3 items-center">

            <span className={`${status.bg} ${status.color} px-5 py-2 rounded-full font-bold`}>
              {status.title}
            </span>

            <span className="bg-white/10 px-5 py-2 rounded-full font-semibold">
              Placement Ready : {resumeData.atsScore >= 75 ? "Yes ✅" : "Improve Resume ⚠️"}
            </span>

          </div>

          {/* Strengths */}
          {resumeData.strengths?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">
                💪 Strengths
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {resumeData.strengths.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-3"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weaknesses */}
          {resumeData.weaknesses?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">
                ⚠ Weaknesses
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {resumeData.weaknesses.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Suggestions */}
          {resumeData.suggestions?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">
                💡 AI Suggestions
              </h3>

              <div className="space-y-3">
                {resumeData.suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-3"
                  >
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default Resume;