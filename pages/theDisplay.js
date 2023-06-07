import {
  ContainerMain,
  InnereBox,
} from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function TheDisplay() {
  const [tongueTwister, setTongueTwister] = useState("");
  const router = useRouter();
  const answer = router.query.answer ? JSON.parse(router.query.answer) : null;

  useEffect(() => {
    if (answer) {
      setTongueTwister(answer.answer.content);
    }
  }, [answer]);

  function handleRefresh() {
    fetchNewTongueTwister();
  }

  async function fetchNewTongueTwister() {
    try {
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        const result = await response.json();
        router.push({
          pathname: "/theDisplay",
          query: { answer: JSON.stringify(result) },
        });
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ContainerMain>
      <InnereBox>{tongueTwister && <p>{tongueTwister}</p>}</InnereBox>
      <button onClick={handleRefresh}>Refresh</button>
      <Link href={"/"}>Return</Link>
    </ContainerMain>
  );
}
