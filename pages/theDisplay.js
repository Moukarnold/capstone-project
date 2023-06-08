import {
  ContainerMain,
  ScreenBox,
} from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function TheDisplay() {
  const [tongueTwister, setTongueTwister] = useState("");
  const router = useRouter();
  const answer = router.query.answer ? JSON.parse(router.query.answer) : null;
  const { language, theme, difficulty } = router.query;

  useEffect(() => {
    if (answer) {
      setTongueTwister(answer.answer.content);
    }
  }, [answer]);

  async function fetchNewTongueTwister() {
    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, theme, difficulty }),
      });

      if (response.ok) {
        const result = await response.json();
        router.push({
          pathname: "/theDisplay",
          query: {
            answer: JSON.stringify(result),
            language,
            theme,
            difficulty,
          },
        });
        setTongueTwister(result.answer.content);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleRefresh() {
    fetchNewTongueTwister();
  }

  return (
    <ContainerMain>
      <ScreenBox>{tongueTwister && <p>{tongueTwister}</p>}</ScreenBox>
      <button onClick={handleRefresh}>Refresh</button>
      <Link href={"/"}>Return</Link>
    </ContainerMain>
  );
}
