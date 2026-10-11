import {
  FaFilePdf,
  FaEye,
  FaDownload,
  FaFileLines,
  FaCircleCheck,
  FaCloudArrowUp,
  FaBrain,
  FaCode,
  FaCheck,
} from "react-icons/fa6";

const ResumePreview = ({ resumeData }) => {
  const uploaded = !!resumeData;

  const fileName = resumeData?.fileName || "Resume.pdf";
  const score = resumeData?.atsScore || 0;
  const summary = resumeData?.summary || "";
  const skills = resumeData?.skills || [];
  const strengths = resumeData?.strengths || [];

  // Resume Status
  const getStatus = () => {
    if (score >= 85)
      return {
        label: "Excellent",
        color: "bg-green-100 text-green-700",
      };

    if (score >= 70)
      return {
        label: "Good",
        color: "bg-blue-100 text-blue-700",
      };

    return {
      label: "Needs Improvement",
      color: "bg-orange-100 text-orange-700",
    };
  };

  const status = getStatus();

  return (
    <div className="bg-white rounded-[30px] border border-green-100 shadow-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-green-600 font-semibold">
            PDF PREVIEW
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            Resume Preview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Uploaded resume details and AI summary.
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
          <FaFilePdf className="text-red-600 text-xl" />
        </div>
      </div>

      {/* Preview Area */}
      <div className="relative rounded-[28px] overflow-hidden border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-[480px]">

        {!uploaded ? (
          <div className="flex flex-col items-center justify-center h-[480px] text-center px-6">

            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-6 shadow">
              <FaFilePdf className="text-red-600 text-5xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-700">
              No Resume Uploaded
            </h3>

            <p className="text-gray-500 mt-3 max-w-sm leading-6">
              Upload your PDF resume to preview it and receive AI ATS analysis.
            </p>

            <div className="mt-6 flex items-center gap-2 bg-green-100 text-green-700 px-5 py-3 rounded-full text-sm font-semibold">
              <FaCloudArrowUp />
              Waiting for Resume Upload
            </div>

          </div>
        ) : (
          <div className="flex flex-col">

            {/* Top Banner */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-4 text-white flex justify-between items-center">

              <div className="flex items-center gap-3">
                <FaFilePdf className="text-2xl" />

                <div>
                  <h3 className="font-semibold text-lg truncate max-w-[220px]">
                    {fileName}
                  </h3>

                  <p className="text-green-100 text-xs">
                    PDF Uploaded Successfully
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-lg">
                <button className="hover:text-green-200">
                  <FaEye />
                </button>

                <button className="hover:text-green-200">
                  <FaDownload />
                </button>
              </div>

            </div>

            {/* Resume Info */}
            <div className="p-6 space-y-6 bg-white">

              {/* ATS Summary Card */}
              <div className="rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-5">

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-sm text-green-700 font-medium">
                      ATS Resume Score
                    </p>

                    <h2 className="text-5xl font-bold text-green-600 mt-1">
                      {score}
                    </h2>
                  </div>

                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${status.color}`}>
                    {status.label}
                  </div>

                </div>

                <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${score}%` }}
                  />
                </div>

              </div>

              {/* AI Summary */}
              <div className="rounded-3xl border border-green-100 bg-green-50 p-5">

                <div className="flex items-center gap-3 mb-3">
                  <FaBrain className="text-green-600 text-xl" />

                  <h3 className="font-bold text-green-700">
                    AI Resume Summary
                  </h3>
                </div>

                <p className="text-gray-700 leading-7">
                  {summary
                    ? summary
                    : "Analyze your resume to generate an AI summary using Gemini."}
                </p>

              </div>

              {/* Skills Preview */}
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">

                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-blue-600 text-xl" />

                  <h3 className="font-bold text-blue-700">
                    Skills Detected
                  </h3>
                </div>

                {skills.length === 0 ? (
                  <p className="text-gray-500">
                    No skills detected yet.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-700 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>

              {/* Resume Strengths */}
              <div className="rounded-3xl border border-green-100 bg-white p-5">

                <div className="flex items-center gap-3 mb-4">
                  <FaCircleCheck className="text-green-600 text-xl" />

                  <h3 className="font-bold text-green-700">
                    Resume Highlights
                  </h3>
                </div>

                {strengths.length === 0 ? (
                  <p className="text-gray-500">
                    Strengths will appear after AI analysis.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {strengths.slice(0, 5).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <FaCheck className="text-green-600 mt-1" />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

            {/* Footer */}
            <div className="border-t px-5 py-4 bg-green-50 flex justify-between items-center">

              <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                <FaCircleCheck />
                AI Analysis Completed
              </div>

              <div className={`px-4 py-2 rounded-full text-sm font-semibold ${status.color}`}>
                {status.label}
              </div>

            </div>

          </div>
        )}
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-green-50 rounded-2xl border border-green-100 p-4 text-center">
          <FaFileLines className="mx-auto text-green-600 text-xl mb-2" />

          <p className="text-xs text-gray-500">File Format</p>

          <h3 className="font-bold text-green-700">PDF</h3>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 text-center">
          <FaEye className="mx-auto text-blue-600 text-xl mb-2" />

          <p className="text-xs text-gray-500">Preview</p>

          <h3 className="font-bold text-blue-700">
            {uploaded ? "Available" : "Waiting"}
          </h3>
        </div>

        <div className="bg-purple-50 rounded-2xl border border-purple-100 p-4 text-center">
          <FaCircleCheck className="mx-auto text-purple-600 text-xl mb-2" />

          <p className="text-xs text-gray-500">Analysis</p>

          <h3 className="font-bold text-purple-700">
            {uploaded ? "Completed" : "Pending"}
          </h3>
        </div>

        <div className="bg-orange-50 rounded-2xl border border-orange-100 p-4 text-center">
          <FaDownload className="mx-auto text-orange-600 text-xl mb-2" />

          <p className="text-xs text-gray-500">Download</p>

          <h3 className="font-bold text-orange-700">
            {uploaded ? "Enabled" : "Disabled"}
          </h3>
        </div>

      </div>

    </div>
  );
};

export default ResumePreview;