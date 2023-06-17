import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Box1,
  Navbar1,
  Microphone,
  ScreenBox1,
  Button,
  Space,
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
    <ScreenBox1>
      {browserSupportsSpeechRecognition && (
        <div>
          <Microphone>
            <p>
              <h5>🎙️: {listening ? "On" : "off"}</h5>
            </p>{" "}
          </Microphone>
          <Box1>
            <div>
              <p>{transcript}</p>
            </div>
          </Box1>
          <Space />

          <Navbar1>
            <Button type="button" onClick={handleStartRecording}>
              Start Recording
            </Button>
            <Button type="button" onClick={handleStopRecording}>
              Stop Recording
            </Button>
            <Button type="button" onClick={handleResetTranscript}>
              Reset Transcript
            </Button>
          </Navbar1>
        </div>
      )}
      {!browserSupportsSpeechRecognition && (
        <p>Browser does not support speech recognition.</p>
      )}
    </ScreenBox1>
  );
};

export default Dictaphone;
