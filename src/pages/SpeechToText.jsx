import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../assets/css/speechToText.css";
const SpeechToText = () => {
  const { transcript, browserSupportsSpeechRecognition, listening } =
    useSpeechRecognition({
      onEnd: () => console.log("Stopped listening (onEnd)"),
      onError: (event) => console.error("Speech recognition error", event),
    });

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
    console.log("Started listening.");
  };

  if (!browserSupportsSpeechRecognition) {
    console.log("Speech recognition not supported");
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <section className="speech-recognition-section">
      <p className="main-title">Speech Recognition</p>
      <div>
        <div className="text">
          <p> {transcript}</p>
        </div>
        <div className="buttons-container mt-auto">
          <button onClick={startListening}>Start Listening</button>
          <button
            onClick={() => {
              SpeechRecognition.stopListening();
            }}
          >
            Stop Listening
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeechToText;
