import annyang from "annyang";

export function setupAnnyang(handleTranscription) {
  if (annyang) {
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

    annyang.addCommands(commands[defaultLanguage]);

    annyang.addCallback("result", (phrases) => {
      if (phrases && phrases.length > 0) {
        handleTranscription(phrases[0]);
      }
    });

    annyang.start({ autoRestart: true, continuous: false });
  }
}
