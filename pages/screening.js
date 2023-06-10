// pages/theDisplay.js
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ButtonContainer,
  ContainerMain,
  ScreenBox,
} from "@/components/styledComponents/Container.styled";
import Image from "next/image";
import styled from "styled-components";

export default function ScreeningPage() {
  const [tongueTwister, setTongueTwister] = useState("");
  const router = useRouter();
  const { language, theme, difficulty } = router.query;

  const fetchTongueTwister = useCallback(async () => {
    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, theme, difficulty }),
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
  }, [language, theme, difficulty]);

  useEffect(() => {
    if (language && theme && difficulty) {
      fetchTongueTwister();
    }
  }, [fetchTongueTwister, language, theme, difficulty]);

  function handleRefresh() {
    fetchTongueTwister();
  }

  return (
    <ContainerMain>
      <ButtonContainer>
        <StyledImage src="/pic/icons8.png" alt="" width={30} height={30} />
      </ButtonContainer>
      <ScreenBox>{tongueTwister && <p>{tongueTwister}</p>}</ScreenBox>
      <button onClick={handleRefresh}>Refresh</button>
      <Link href={"/"}>Return</Link>
    </ContainerMain>
  );
}

const StyledImage = styled(Image)`
  margin-right: -390px;
  margin-bottom: px;
  box-shadow: 10px 5px 5px;
`;
