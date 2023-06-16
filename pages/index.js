import {
  Button,
  ContainerForm,
  ContainerMain,
} from "@/components/styledComponents/Container.styled";
import { useRouter } from "next/router";
export default function HomePage() {
  const router = useRouter();

  function handleNext(event) {
    event.preventDefault();
    router.push("/starting");
  }

  return (
    <ContainerMain>
      <ContainerForm>
        <h1>welcome to </h1> <h1>Tonguy-Twisty</h1>
        <h3> let us have fun with Tonge twister </h3>
      </ContainerForm>
      <Button type="button" onClick={handleNext}>
        {" "}
        Next{" "}
      </Button>
    </ContainerMain>
  );
}
