import styled from "styled-components";
import logo from "./logo.png";

export const Navigation = styled.div`
  min-width: 280px;
  z-index: 1;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 34%,
    rgba(20, 18, 58, 1) 58%,
    rgba(90, 90, 144, 1) 100%,
    rgba(2, 0, 36, 1) 100%
  );
  position: absolute;
  top:-11%;
  left: 0px;
  right: 0px;
  height: 300px;
  -ms-transform: skewY(5deg);
  -webkit-transform: skewY(5deg);
  transform: skewY(-6deg);
`;

export const LogoImg = styled.img`
  grid-area: logo;
  content: url("${logo}");
  position: relative;
  z-index: 2;
  margin: 15px;
  margin-right: 100px;
  width: 200px;
  height: 85px;
  @media (max-width: 791px) {
    margin: 15px;
    margin-top: 50px;
    width: 150px;
    height: 63px;
  }
`;

export const NavigationLinks = styled.button`
  position: relative;
  z-index: 2;
  background-color: transparent;
  border: none;
  margin: 20px;
  margin-top: 30px;
  padding: 15px;
  font-family: "Montserrat", cursive, sans-serif;
  text-decoration: none;
  color: #e0ebff;
  font-weight: 400;
  font-size: 13px;
  transition: all 0.01s ease-in-out;

  &:hover {
    color: rgb(158, 158, 158);
    cursor: pointer;
  }
  &:active {
    color: rgb(158, 158, 158);
    transform: scale(0.8);
  }
  @media (max-width: 791px) {
    margin: 1px;
    margin-left: -15px;
    margin-top: 20px;
    padding: 1px;
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 280px;
  @media (max-width: 791px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "logo rest "
      "logo rest "
      "logo rest";
    align-items: end;
    margin-top: 10px;
  }
`;
