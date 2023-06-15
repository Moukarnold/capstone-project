import {
  Box,
  Box1,
  ContainerMain,
  Navbar,
  ScreenBox,
  ScreenBox1,
} from "@/components/styledComponents/Container.styled";
import { ConfigContext } from "@/contexts/ConfigContext";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
//import Dictaphone from "@/components/dictaphone/Dictaphone";
import dynamic from "next/dynamic";

const Dictaphone = dynamic(() => import("@/components/dictaphone/Dictaphone"), {
  ssr: false,
});

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
      <ScreenBox>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>{tongueTwister && <p>{tongueTwister}</p>}</Box>
        )}
        <Navbar>
          <button type="button" onClick={handleRefresh}>
            Refresh
          </button>
        </Navbar>
      </ScreenBox>
      <div>
        {" "}
        <h4> just before you start take a breath and read slowly</h4>
      </div>
      <ScreenBox1>
        <Dictaphone />
      </ScreenBox1>

      <button type="button">Reset</button>

      <Link href="/starting">Return</Link>
    </ContainerMain>
  );
}
