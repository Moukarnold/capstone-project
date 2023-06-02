import { ContainerMain } from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import PageLanguage from "../components/language/languages";
import PageLevel from "../components/level/level";
import PageOptions from "../components/options/options";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState(
    "Simple Sentences & For Kids"
  );
  const [selectedLevels, setSelectedLevels] = useState("Basic");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleOption(option) {
    setSelectedOptions(option);
    console.log("Option is " + option);
  }

  function handleLevel(level) {
    setSelectedLevels(level);
    console.log("Level is " + level);
  }

  function handleLanguage(language) {
    setSelectedLanguage(language);
    console.log("Language is " + language);
  }

  async function handleNext(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    handleLanguage(selectedLanguage);
    handleOption(selectedOptions);
    handleLevel(selectedLevels);
    fetcher(data);
  }

  async function fetcher(data) {
    console.log("fetcher", data);
    try {
      setLoading(true);
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        setAnswer(result);
        console.log(result);
      } else {
        console.error("Bad Response", error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ContainerMain>
        <h2>Homepage</h2>
        <form onSubmit={handleNext}>
          <h2>Text Language</h2>
          <PageLanguage handleLanguage={handleLanguage} />
          <h2>Text Option</h2>
          <PageOptions handleOption={handleOption} />
          <h2>Text Level</h2>
          <PageLevel handLeLevel={handleLevel} />
          <StyledLink href={"/folgePage"}>Next</StyledLink>

          <button type="submit">Submit</button>
        </form>
      </ContainerMain>
      {loading ? <p>loading..</p> : <p>{answer?.answer.content}</p>}
    </>
  );
}

const StyledLink = styled(Link)`
  box-shadow: 10px 5px 5px gray;
`;
