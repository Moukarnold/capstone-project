import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
  SpaceLabel,
} from "@/components/styledComponents/Container.styled";
import Link from "next/link";
import { useState } from "react";

export default function PageLevel() {
  const [levels, setLevels] = useState("Basic");

  function handleCheckLevel(level) {
    setLevels(level);
    console.log(level);
  }

  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Level</h1>
          <ContainerMainLabel>
            <input
              onChange={() => handleCheckLevel("Basic")}
              type="checkbox"
              checked={levels === "Basic"}
              value="Basic"
              name="Basic"
            />
            <SpaceLabel>
              {" "}
              <h3>Basic</h3>
            </SpaceLabel>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input
              onChange={(Event) => handleCheckLevel("Intermediaire")}
              type="checkbox"
              checked={levels === "Intermediaire"}
              value="Intermediaire"
              name="Intermediaire"
            />
            <SpaceLabel>
              {" "}
              <h3>Intermediaire</h3>{" "}
            </SpaceLabel>
          </ContainerMainLabel>{" "}
          <ContainerMainLabel>
            <input
              onChange={(Event) => handleCheckLevel("Advanced")}
              type="checkbox"
              checked={levels === "Advanced"}
              value="Advanced"
              name="Advanced"
            />
            <SpaceLabel>
              {" "}
              <h3>Advanced</h3>{" "}
            </SpaceLabel>
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
