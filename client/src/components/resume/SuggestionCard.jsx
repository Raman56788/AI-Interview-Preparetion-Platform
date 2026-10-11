import {
  FaLightbulb,
  FaArrowTrendUp,
  FaCircleCheck,
  FaTriangleExclamation,
  FaRobot,
  FaBrain,
} from "react-icons/fa6";

const SuggestionCard = ({ resumeData }) => {
  // ---------------- Gemini AI Data ----------------
  const suggestions = resumeData?.suggestions || [];
  const strengths = resumeData?.strengths || [];
  const weaknesses = resumeData?.weaknesses || [];
  const summary = resumeData?.summary || "";
  const score = resumeData?.atsScore || 0;

  // Target Score
  const targetScore = score >= 90 ? score : 90;

  // AI Insight
  const getInsight = () => {
    if (score >= 85) {
      return "Excellent resume! Your resume is ATS-friendly for Software Developer internships. Add cloud technologies and measurable achievements to reach 95+ ATS score.";
    }

    if (score >= 70) {
      return "Your resume has a good foundation. Improve missing keywords, REST APIs, cloud skills, and quantified project achievements to increase your ATS score.";
    }

    return "Your resume needs improvement. Add more technical projects, skills, certifications, and ATS keywords before applying for placements.";
  };

  return (
    <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            GEMINI AI FEEDBACK
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            AI Resume Suggestions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Personalized improvements generated from your ATS analysis.
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shadow-sm">
          <FaRobot className="text-green-600 text-2xl" />
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="space-y-4">
        {suggestions.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-6 text-center">
            <FaBrain className="mx-auto text-4xl text-gray-400 mb-3" />
            <p className="text-gray-500">
              Upload and analyze your resume to receive AI suggestions.
            </p>
          </div>
        ) : (
          suggestions.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gradient-to-r from-green-50 via-white to-white border border-green-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <FaLightbulb />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  Suggestion #{index + 1}
                </h3>

                <p className="text-sm text-gray-600 mt-1 leading-6">
                  {item}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* AI Insight */}
      <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <FaArrowTrendUp className="text-3xl" />

          <h3 className="text-xl font-bold">
            AI Improvement Insight
          </h3>
        </div>

        <p className="text-green-100 leading-7">
          {summary ? summary : getInsight()}
        </p>
      </div>

      {/* Strengths */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-3xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <FaCircleCheck className="text-green-600 text-2xl" />

          <h3 className="font-bold text-green-700 text-lg">
            Resume Strengths
          </h3>
        </div>

        {strengths.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No strengths available yet.
          </p>
        ) : (
          <div className="space-y-3">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <FaCircleCheck className="text-green-600 mt-1" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Weaknesses */}
      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-3xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <FaTriangleExclamation className="text-orange-500 text-2xl" />

          <h3 className="font-bold text-orange-700 text-lg">
            Areas to Improve
          </h3>
        </div>

        {weaknesses.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No weaknesses detected.
          </p>
        ) : (
          <div className="space-y-3">
            {weaknesses.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <FaTriangleExclamation className="text-orange-500 mt-1" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Recommendation Summary */}
      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-green-50 rounded-2xl border border-green-100 p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            AI Suggestions
          </p>

          <h3 className="text-3xl font-bold text-green-700 mt-2">
            {suggestions.length}
          </h3>

          <p className="text-sm text-green-600 mt-1">
            Improvements Found
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            Target ATS Score
          </p>

          <h3 className="text-3xl font-bold text-blue-700 mt-2">
            {targetScore}+
          </h3>

          <p className="text-sm text-blue-600 mt-1">
            Placement Ready Goal
          </p>
        </div>

      </div>

      {/* Footer Tip */}
      <div className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-2xl p-4">
        <p className="text-sm text-gray-700 leading-6">
          <span className="font-semibold text-green-700">💡 AI Tip:</span>{" "}
          Keep your resume limited to one page, include GitHub and LinkedIn links,
          highlight measurable project achievements, and use software developer /
          cloud keywords to improve ATS performance.
        </p>
      </div>

    </div>
  );
};

export default SuggestionCard;