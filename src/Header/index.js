import {
  Navigation,
  NavigationLinks,
  LogoImg,
  Wrapper
} from "./styled.js";

const Header = ({
  onZlotyButtonClick,
  onDollarButtonClick,
  onEuroButtonClick,
}) => (
  <header>
    <Navigation>
    </Navigation>
    <Wrapper>
    <LogoImg alt="logo"/>
      <NavigationLinks onClick={onZlotyButtonClick}>
        <span>Złoty polski (PLN)</span>
      </NavigationLinks>
      <NavigationLinks onClick={onEuroButtonClick}>
        <span>Euro (EUR)</span>
      </NavigationLinks>
      <NavigationLinks onClick={onDollarButtonClick}>
        <span>Dolar amerykański (USD)</span>
      </NavigationLinks>
      </Wrapper>
  </header>
);

export default Header;
