import {
  ContainerMain,
  ContainerForm,
  Button,
} from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";
export default function HomePage() {
  const router = useRouter();

  function handleNext(event) {
    event.preventDefault();
    router.push("/starting");
  }

  return (
    <div>
      <ContainerMain>
        <ContainerForm>
          <h1>welcome to tonguy-Twisty</h1>

          <h3> let us have fun with Tonge twister </h3>
        </ContainerForm>
        <Button type="button" onClick={handleNext}>
          {" "}
          Next{" "}
        </Button>
      </ContainerMain>
    </div>
  );
}
