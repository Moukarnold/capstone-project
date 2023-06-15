import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleStartRecording = (language) => {
    SpeechRecognition.startListening({ language });
  };

  const handleStopRecording = () => {
    SpeechRecognition.stopListening();
  };

  const handleResetTranscript = () => {
    resetTranscript();
  };

  const renderLanguageButtons = () => {
    const languages = [
      { label: "English", code: "en-US" },
      { label: "French", code: "fr-FR" },
      { label: "German", code: "de-DE" },
    ];

    return languages.map((language) => (
      <button
        key={language.code}
        type="button"
        onClick={() => handleStartRecording(language.code)}
      >
        Start Recording ({language.label})
      </button>
    ));
  };

  return (
    <div>
      {browserSupportsSpeechRecognition ? (
        <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          {renderLanguageButtons()}
          <button type="button" onClick={handleStopRecording}>
            Stop Recording
          </button>
          <button type="button" onClick={handleResetTranscript}>
            Reset Transcript
          </button>
          <p>{transcript}</p>
        </div>
      ) : (
        <p>Browser does not support speech recognition.</p>
      )}
    </div>
  );
};

export default Dictaphone;
