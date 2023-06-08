import { useState } from "react";
import Languages from "@/components/languages/Languages";
import Themes from "@/components/themes/Themes";
import Difficulty from "@/components/difficulty/Difficulty";
import { ContainerMain } from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";

export default function HomePage() {
  const [config, setConfig] = useState({
    language: "",
    theme: "",
    difficulty: "",
  });
  const router = useRouter();

  // call from openai
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleNewLanguage(language) {
    setConfig({ ...config, language });
  }
  function handleNewTheme(theme) {
    setConfig({ ...config, theme });
  }
  function handleNewDifficulty(difficulty) {
    setConfig({ ...config, difficulty });
  }

  async function fetcher(data) {
    setLoading(true);

    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        setAnswer(result);
        router.push({
          pathname: "/theDisplay",
          query: { answer: JSON.stringify(result), ...config },
        });
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetcher(config);
  }

  return (
    <>
      <ContainerMain>
        <h2>Tongue Twister</h2>
        <Languages onLanguage={handleNewLanguage} />
        <Themes onTheme={handleNewTheme} />
        <Difficulty onDifficulty={handleNewDifficulty} />
        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Answer"}
          </button>
        </form>
      </ContainerMain>
      <div>
        {loading && <p>Loading...</p>}
        {/* answer from openai */}
        {answer && <p>{answer.answer.content}</p>}
      </div>
    </>
  );
}
