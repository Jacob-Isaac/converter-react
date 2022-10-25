import cog from "./cog.png";
import { Cog, Wrapper } from "./styled";

const LoadingScreen = () => (
  <Wrapper>
    <h3>Ładowanie kursu walut</h3>
    <Cog src={cog} alt="Ładujemy..."></Cog>
  </Wrapper>
);

export default LoadingScreen;
