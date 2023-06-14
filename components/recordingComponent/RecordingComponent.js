import React from "react";

export default function RecordingComponent({
  recordingTime,
  handleStopRecording,
}) {
  return (
    <div>
      <p>Recording Time: {recordingTime} seconds</p>
      <button type="button" onClick={handleStopRecording}>
        Stop Recording
      </button>
    </div>
  );
}
