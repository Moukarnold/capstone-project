import React from "react";

export default function StarRecordingComponent({ handleStartRecording }) {
  return (
    <div>
      <>
        <button type="button" onClick={() => handleStartRecording("en")}>
          Start Recording in English 🇬🇧
        </button>
        <button type="button" onClick={() => handleStartRecording("fr")}>
          Start Reording in French 🇫🇷
        </button>
        <button type="button" onClick={() => handleStartRecording("de")}>
          Start Recording in German 🇩🇪
        </button>
      </>
    </div>
  );
}
