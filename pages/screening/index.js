import { useEffect, useState, useCallback, useContext } from "react";
import Link from "next/link";
import {
  Box,
  Box1,
  ScreenBox1,
  Navbar,
  ButtonContainer,
  ContainerMain,
  ScreenBox,
} from "@/components/styledComponents/Container.styled";
import { useSpeechRecognition } from "react-speech-recognition";
import { ConfigContext } from "@/contexts/ConfigContext";

export default function ScreeningPage() {
  const { config } = useContext(ConfigContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tongueTwister, setTongueTwister] = useState("");
  const [transcription, setTranscription] = useState(""); // État pour le texte de transcription

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

  const handleRefresh = () => {
    fetchTongueTwister();
  };

  const handleTranscription = (text) => {
    setTranscription(text);
  };

  const {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      handleTranscription(transcript);
    }
  }, [transcript]);

  const handleStartRecording = () => {
    startListening();
  };

  const handleStopRecording = () => {
    stopListening();
    resetTranscript();
  };

  return (
    <ContainerMain>
      <ScreenBox>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>{tongueTwister && <p>{tongueTwister}</p>}</Box>
        )}
      </ScreenBox>
      <Navbar>
        <button type="button" onClick={handleRefresh}>
          Refresh
        </button>
      </Navbar>
      <ScreenBox1>
        <Box1>{transcription}</Box1>
      </ScreenBox1>

      <button type="button" onClick={handleStartRecording}>
        Start Recording in English
      </button>
      <button type="button" onClick={handleStopRecording}>
        Stop Recording in French
      </button>
      <button type="button" onClick={handleStopRecording}>
        Stop Recording in German
      </button>

      <Link href="/">Return</Link>
    </ContainerMain>
  );
}
