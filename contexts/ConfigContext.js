import React, { createContext, useState } from "react";
import { SpeechRecognitionProvider } from "react-speech-recognition";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    language: "",
    theme: "",
    difficulty: "",
  });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
