import { useEffect, useState, useCallback, useContext } from "react";
import Link from "next/link";
import {
  Box,
  ButtonContainer,
  ContainerMain,
  ScreenBox,
} from "@/components/styledComponents/Container.styled";
import Image from "next/image";
import styled from "styled-components";
import { ConfigContext } from "@/contexts/ConfigContext";

export default function ScreeningPage() {
  const { config } = useContext(ConfigContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tongueTwister, setTongueTwister] = useState("");

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

  return (
    <ContainerMain>
      <ButtonContainer>
        <StyledImage src="/pic/icons8.png" alt="" width={30} height={30} />
      </ButtonContainer>

      <ScreenBox>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>{tongueTwister && <p>{tongueTwister}</p>}</Box>
        )}
      </ScreenBox>
      <button onClick={handleRefresh}>Refresh</button>
      <Link href="/">Return</Link>
    </ContainerMain>
  );
}

const StyledImage = styled(Image)`
  margin-right: -425px;
  margin-bottom: -100px;
  box-shadow: 10px 5px 5px;
`;
