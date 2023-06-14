import RecordingComponent from "@/components/recordingComponent/RecordingComponent";
import StarRecordinfComponent from "@/components/startRecordingComponent/StarRecordinfComponent";
import {
  Box1,
  ContainerMain,
  Navbar,
  ScreenBox,
  ScreenBox1,
} from "@/components/styledComponents/Container.styled";
import TranscriptionComponent from "@/components/transcriptionComponent/TranscriptionComponent";
import { ConfigContext } from "@/contexts/ConfigContext";
import { setupAnnyang } from "@/utils/annyangConfig";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import TongueTwisterComponent from "@/components/tongueTwisterComponent";

export default function ScreeningPage() {
  const { config } = useContext(ConfigContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tongueTwister, setTongueTwister] = useState("");
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const fetchTongueTwister = useCallback(async () => {
    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (response.ok) {
        const result = await response.json();
        setTongueTwister(result.answer.content);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }, [config]);

  useEffect(() => {
    fetchTongueTwister();
  }, [fetchTongueTwister]);

  function handleRefresh() {
    fetchTongueTwister();
  }

  function handleStartRecording(language) {
    setIsStarted(true);
    setIsRecording(true);
    setRecordingTime(0);
    setTranscription("");
    setStartTime(Date.now());
    annyang.abort();
    annyang.setLanguage(language);
    annyang.start();
  }

  function handleStopRecording() {
    setIsRecording(false);
    setStartTime(null);
    annyang.abort();
  }

  function handleResetRecording() {
    setTranscription("");
  }

  function handleTranscription(transcript) {
    if (isStarted && isRecording) {
      setTranscription(transcript);
      console.log("transcritiom", transcription);
    }
  }

  useEffect(() => {
    const handleTranscription = (transcript) => {
      setTranscription(transcript);
      console.log("transcript", transcript);
    };

    setupAnnyang(handleTranscription);

    let intervalId;

    if (isRecording && startTime !== null) {
      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);
        setRecordingTime(elapsedTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      annyang.abort();
    };
  }, [isRecording, startTime]);

  return (
    <ContainerMain>
      <ScreenBox>
        {isLoading ? (
          <p> Loading...</p>
        ) : (
          <TongueTwisterComponent tongueTwister={tongueTwister} />
        )}
      </ScreenBox>
      <Navbar>
        <button onClick={handleRefresh}>Refresh</button>
      </Navbar>
      <ScreenBox1>
        <Box1>
          <h3>Transcription</h3>
          <TranscriptionComponent transcription={transcription} />{" "}
        </Box1>
      </ScreenBox1>

      {isRecording ? (
        <RecordingComponent
          recordingTime={recordingTime}
          handleStopRecording={handleStopRecording}
        />
      ) : (
        <StarRecordinfComponent handleStartRecording={handleStartRecording} />
      )}

      <button type="button" onClick={handleResetRecording}>
        Reset
      </button>

      <Link href="/">Return</Link>
    </ContainerMain>
  );
}
