import { Box } from "../styledComponents/Container.styled";

export default function TongueTwisterComponent({ tongueTwister }) {
  return <Box>{tongueTwister && <p>{tongueTwister}</p>}</Box>;
}
