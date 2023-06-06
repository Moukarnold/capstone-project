import { useState } from "react";
import twisters from "/public/twisters";
import Languages from "@/components/languages/Languages";
import Themes from "@/components/themes/Themes";
import Difficulty from "@/components/difficulty/Difficulty";
import { ContainerMain } from "@/components/styledComponents/Container.styled";
//import { Router } from "next/router";

export default function HomePage() {
  const [config, setConfig] = useState({
    language: "",
    theme: "",
    difficulty: "",
  });

  /* // call from json file
  const selectedTwister = twisters.find((twister) => {
    return (
      twister.language === config.language &&
      twister.theme === config.theme &&
      twister.difficulty === config.difficulty
    );
  });*/
  // call from openai
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

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
        console.log(result);
        /*   Router.push({
          pathname: "/twisterPage",
          query: {
            answer: result.answer.content 
          },
        });*/
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
        <h2> tongue twister</h2>
        <label htmlFor="lang-select">Language:</label>
        <Languages config={config} setConfig={setConfig} />
        <label htmlFor="lang-select">Theme:</label>
        <Themes config={config} setConfig={setConfig} />
        <label htmlFor="lang-select">Difficulty:</label>
        <Difficulty config={config} setConfig={setConfig} />

        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Answer"}
          </button>
        </form>
      </ContainerMain>
      <div>
        {loading && <p>loading...</p>}
        {/* answer from openai */}
        {answer && <p>{answer.answer.content}</p>}
      </div>
      {/* answer from json file 
      {selectedTwister?.tongue_twister}*/}
    </>
  );
}
