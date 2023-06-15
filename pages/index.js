import {
  ContainerMain,
  ContainerForm,
} from "@/components/styledComponents/Container.styled";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <ContainerMain>
        <ContainerForm>
          <h1>welcome to tonguy-Twisty</h1>

          <h3> let us have fun with Tonge twister </h3>
        </ContainerForm>
        <Link href={"/starting"}> Next </Link>
      </ContainerMain>
    </div>
  );
}
