import {
  Box,
  Button,
  ContainerMain,
  Navbar,
  Notice,
  ScreenBox,
} from "@/components/styledComponents/Container.styled";
import { ConfigContext } from "@/contexts/ConfigContext";
import { useCallback, useContext, useEffect, useState } from "react";
//import Dictaphone from "@/components/dictaphone/Dictaphone";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Dictaphone = dynamic(() => import("@/components/dictaphone/Dictaphone"), {
  ssr: false,
});

export default function ScreeningPage() {
  const { config } = useContext(ConfigContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tongueTwister, setTongueTwister] = useState("");
  const router = useRouter();

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
  function handleReturn(event) {
    event.preventDefault();
    router.push("/starting");
  }

  return (
    <ContainerMain>
      <ScreenBox>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>{tongueTwister && <p>{tongueTwister}</p>}</Box>
        )}
        <Navbar>
          <Button type="button" onClick={handleRefresh}>
            Refresh
          </Button>
        </Navbar>
      </ScreenBox>
      <Notice>
        <h5>Just before you start, take a breath first and then read slowly</h5>
      </Notice>

      <Dictaphone language={config.language} />

      <Button onClick={handleReturn}>Return</Button>
    </ContainerMain>
  );
}
