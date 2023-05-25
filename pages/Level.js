import {
  Box,
  ContainerMain,
  ContainerMainLabel,
  InnereBox,
} from "@/components/styles/container.styled";
import Link from "next/link";

export default function pageLevel() {
  return (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Level</h1>
          <ContainerMainLabel>
            <input onClick={handleCheckLevel} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Basic</h3>
            </span>
          </ContainerMainLabel>
          <ContainerMainLabel>
            <input onClick={handleCheckLevel} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Intermediaire</h3>{" "}
            </span>
          </ContainerMainLabel>{" "}
          <ContainerMainLabel>
            <input onClick={handleCheckLevel} type="checkbox" />
            <span style={spaceLabel}>
              {" "}
              <h3>Advanced</h3>{" "}
            </span>
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
