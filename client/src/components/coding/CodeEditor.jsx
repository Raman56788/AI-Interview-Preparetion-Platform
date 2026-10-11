import { useState } from "react";

const defaultCode = `function solve() {

  // Write your solution here

}`;

const CodeEditor = () => {

  const [code, setCode] = useState(defaultCode);

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Code Editor
      </h2>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="
          w-full
          h-96
          bg-gray-900
          text-green-400
          rounded-xl
          p-5
          font-mono
          text-sm
          outline-none
          resize-none
        "
      />

      <div className="flex gap-4 mt-6">

        <button
          className="
            flex-1
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          ▶ Run Code
        </button>

        <button
          className="
            flex-1
            bg-green-600
            hover:bg-green-700
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          ✅ Submit Solution
        </button>

      </div>

    </div>

  );

};

export default CodeEditor;