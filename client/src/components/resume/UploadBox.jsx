import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

const UploadBox = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Upload Resume
      </h2>

      <div
        className="
          border-2
          border-dashed
          border-green-400
          rounded-2xl
          p-10
          text-center
          hover:border-green-600
          transition
          cursor-pointer
        "
      >
        <FaCloudUploadAlt
          className="mx-auto text-6xl text-green-600 mb-5"
        />

        <h3 className="text-xl font-semibold text-gray-800">
          Drag & Drop Resume
        </h3>

        <p className="text-gray-500 mt-2">
          Upload your resume in PDF format
        </p>

        <button
          className="
            mt-6
            bg-green-600
            hover:bg-green-700
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Choose File
        </button>

        <div className="mt-8 flex items-center justify-center gap-3">

          <FaFilePdf className="text-red-600 text-2xl" />

          <span className="text-gray-600">
            No file selected
          </span>

        </div>

      </div>

    </div>
  );
};

export default UploadBox;