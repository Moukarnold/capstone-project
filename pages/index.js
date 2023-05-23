import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  height: 500px;
  width: 500px;
  border: solid 2px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default function HomePage() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}
