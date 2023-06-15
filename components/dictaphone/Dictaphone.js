import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Box,
  Box1,
  ContainerMain,
  Navbar1,
  ScreenBox,
  ScreenBox1,
} from "@/components/styledComponents/Container.styled";

const Dictaphone = ({ language }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleStartRecording = () => {
    let languageCode;

    // Map the selected language to its corresponding code
    if (language === "English") {
      languageCode = "en-US";
    } else if (language === "French") {
      languageCode = "fr-FR";
    } else if (language === "German") {
      languageCode = "de-DE";
    }

    SpeechRecognition.startListening({ language: languageCode });
  };

  const handleStopRecording = () => {
    SpeechRecognition.stopListening();
  };

  const handleResetTranscript = () => {
    resetTranscript();
  };

  return (
    <ScreenBox>
      {browserSupportsSpeechRecognition ? (
        <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <Navbar1>
            <button type="button" onClick={handleStartRecording}>
              Start Recording
            </button>
            <button type="button" onClick={handleStopRecording}>
              Stop Recording
            </button>
            <button type="button" onClick={handleResetTranscript}>
              Reset Transcript
            </button>
          </Navbar1>
          <p>{transcript}</p>
        </div>
      ) : (
        <p>Browser does not support speech recognition.</p>
      )}
    </ScreenBox>
  );
};

export default Dictaphone;
