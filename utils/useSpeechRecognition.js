import { useSpeechRecognition } from "react-speech-recognition";

export function useSpeechRecognitionWithConfig(handleTranscription) {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  // Autres fonctions et logique ici

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  };
}
