import { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaStopCircle } from "react-icons/fa";

const SpeechRecognition = ({ answer, setAnswer }) => {
  const recognitionRef = useRef(null);
  const isListeningRef = useRef(false);

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      console.log("Speech Recognition Not Supported");
      return;
    }

    const recognition = new SpeechRecognitionAPI();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      isListeningRef.current = true;
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let interimText = "";
      let finalText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const speech = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalText += speech + " ";
        } else {
          interimText += speech;
        }
      }

      if (finalText) {
        setTranscript((prev) => {
          const updated = prev + finalText;
          setAnswer(updated + interimText);
          return updated;
        });
      } else {
        setAnswer(transcript + interimText);
      }
    };

    recognition.onerror = (event) => {
      console.log(event.error);
      setIsListening(false);
      isListeningRef.current = false;
    };

    recognition.onend = () => {
      if (isListeningRef.current) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, [transcript, setAnswer]);

  const startListening = () => {
    setAnswer("");
    setTranscript("");

    recognitionRef.current.start();
  };

  const stopListening = () => {
    isListeningRef.current = false;
    recognitionRef.current.stop();
    setIsListening(false);
  };

  return (
    <div className="mt-5">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-white font-semibold transition ${
          isListening
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isListening ? <FaStopCircle /> : <FaMicrophone />}

        {isListening ? "Stop Recording" : "Start Recording"}
      </button>

      {isListening && (
        <p className="text-center text-green-600 mt-3 animate-pulse font-medium">
          🎤 Listening... Speak in English
        </p>
      )}
    </div>
  );
};

export default SpeechRecognition;