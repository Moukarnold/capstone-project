import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

SpeechRecognition.startListening({ continuous: true });

export function SpeechRecognitionConfig(handleTranscription) {
  const commands = {
    en: {
      "start recording": () => {
        handleTranscription("Start Recording (English)");
      },
      // Autres commandes en anglais
    },
    fr: {
      "commencer l'enregistrement": () => {
        handleTranscription("Démarrer l'enregistrement (Français)");
      },
      // Autres commandes en français
    },
    de: {
      "start aufnahme": () => {
        handleTranscription("Aufnahme starten (Deutsch)");
      },
      // Autres commandes en allemand
    },
  };

  const defaultLanguage = "en"; // Langue par défaut

  const {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition({ commands, defaultLanguage });

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  };
}
