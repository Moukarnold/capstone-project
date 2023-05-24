import styled from "styled-components";
import Link from "next/link";
import {
  ContainerMain,
  Box,
  InnereBox,
} from "@/components/styles/container.styled";

export default function HomePage() {
  return (
    <div>
      <ContainerMain>
        <InnereBox>
          <h1> Homepage</h1>
          <Link href={"/languages"}>
            <button> Languages</button>
          </Link>
          <Link href={"/Options"}>
            <button> Options</button>
          </Link>
          <Link href={"/Level"}>
            {" "}
            <button> Level</button>
          </Link>
          <Link href={"/Next"}>
            {" "}
            <button> Next</button>
          </Link>
        </InnereBox>
      </ContainerMain>
    </div>
  );
}
