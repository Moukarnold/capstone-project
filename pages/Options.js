import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
  SpaceLabel,
} from "@/components/styledComponents/Container.styled";

import Link from "next/link";
import { useState } from "react";

const spk = "simple Sentences and for kids";

export default function PageOptions() {
  const [options, setOptions] = useState(spk);

  function handleOption(option) {
    setOptions(option);
    console.log(option);
  }

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Options</h1>
          <ContainerMainLabel>
            <input
              onChange={() => handleOption(spk)}
              type="checkbox"
              checked={options === spk}
              name={spk}
              value={spk}
            />
            <spaceLabel>
              {" "}
              <h3>Simple Sentences & For Kids</h3>
            </spaceLabel>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input
              onChange={() => handleOption("Poemes")}
              type="checkbox"
              checked={options === "Poemes"}
              name="Poemes"
              value="Poemes"
            />
            <spaceLabel>
              {" "}
              <h3>Poemes</h3>{" "}
            </spaceLabel>
          </ContainerMainLabel>{" "}
          <ContainerMainLabel>
            <input
              onChange={() => handleOption("Jokes")}
              type="checkbox"
              checked={options === "Jokes"}
              name="Jokes"
              value="Jokes"
            />
            <spaceLabel>
              {" "}
              <h3>Jokes</h3>{" "}
            </spaceLabel>
          </ContainerMainLabel>{" "}
        </InnereBox>
        <Link href={"/"}>
          {" "}
          <button> Return</button>
        </Link>
      </Box>
    </ContainerMain>
  );
}
