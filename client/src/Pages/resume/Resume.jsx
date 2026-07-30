import UploadBox from "../../components/resume/UploadBox";
import ResumePreview from "../../components/resume/ResumePreview";
import ATSScoreCard from "../../components/resume/ATSScoreCard";
import SkillAnalysis from "../../components/resume/SkillAnalysis";
import SuggestionCard from "../../components/resume/SuggestionCard";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Resume Analyzer
        </h1>

        <p className="text-gray-500 mt-2">
          Upload your resume and get an ATS score with AI-powered suggestions.
        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Left Side */}

        <div className="space-y-6">

          <UploadBox />

          <ResumePreview />

        </div>

        {/* Right Side */}

        <div className="space-y-6">

          <ATSScoreCard />

          <SkillAnalysis />

          <SuggestionCard />

        </div>

      </div>

    </div>
  );
};

export default Resume;