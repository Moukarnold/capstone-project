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
  return (
    <ContainerMain>
      <InnereBox>{tongueTwister && <p>{tongueTwister}</p>}</InnereBox>
      <button>Refresh</button>
      <Link href={"/"}>Return</Link>
    </ContainerMain>
  );
}
