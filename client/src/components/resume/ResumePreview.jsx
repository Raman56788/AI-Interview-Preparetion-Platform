import { FaFilePdf } from "react-icons/fa";

const ResumePreview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Resume Preview
      </h2>

      <div
        className="
          h-96
          border-2
          border-dashed
          border-gray-300
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <FaFilePdf className="text-red-600 text-7xl mb-5" />

        <h3 className="text-xl font-semibold text-gray-700">
          No Resume Uploaded
        </h3>

        <p className="text-gray-500 mt-2 text-center">
          Upload a PDF resume to preview it here.
        </p>
      </div>

    </div>
  );
};

export default ResumePreview;