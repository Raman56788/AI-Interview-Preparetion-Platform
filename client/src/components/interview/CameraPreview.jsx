import { useEffect, useRef, useState } from "react";
import { FaVideo, FaVideoSlash } from "react-icons/fa";

const CameraPreview = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Start Camera
  const startCamera = async () => {
    try {
      setLoading(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
    } catch (error) {
      console.error("Camera Error:", error);
      alert("Camera permission denied or camera not available.");
      setCameraOn(false);
    } finally {
      setLoading(false);
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    streamRef.current = null;
    setCameraOn(false);
  };

  // Auto Start Camera
  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="rounded-2xl border bg-black overflow-hidden shadow-md">
      <div className="relative h-72 w-full bg-gray-900">
        {cameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <FaVideoSlash className="text-5xl mb-3 text-red-400" />
            <p>Camera Off</p>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              cameraOn
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {cameraOn ? "Camera Active" : "Camera Off"}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-white flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-700">Your Camera</h3>

          <p className="text-sm text-gray-500">
            {loading
              ? "Starting camera..."
              : cameraOn
              ? "Live camera preview enabled."
              : "Camera disabled."}
          </p>
        </div>

        <button
          onClick={cameraOn ? stopCamera : startCamera}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 text-white font-medium ${
            cameraOn
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {cameraOn ? <FaVideoSlash /> : <FaVideo />}
          {cameraOn ? "Stop Camera" : "Start Camera"}
        </button>
      </div>
    </div>
  );
};

export default CameraPreview;