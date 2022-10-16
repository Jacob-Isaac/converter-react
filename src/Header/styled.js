import styled from "styled-components";
import logo from "./logo.png";

export const Navigation = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0.1px 0.1px 10px;
  background-color: #75A8FF;
  width: 100%;
  min-width: 250px;

  @media (max-width: 968px) {
    box-shadow: 5px 5px 10px;
    background-color: #75A8FF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */
  min-width: 280px;
  margin-right: 1px;
  z-index: 1;
            margin-left: 0px;
            background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 34%, rgba(20,18,58,1) 58%, rgba(90,90,144,1) 100%, rgba(2,0,36,1) 100%);
            position: absolute;
            top: -100px;
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
  width:200px;
  height:85px;
  @media (max-width: 791px) {
    margin: 15px;
  width:100px;
  height:42px;
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
  color: #E0EBFF;
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
  margin-top: 20px;
  padding: 1px;
  font-size: 10px;
  } 
`;

export const Wrapper = styled.div`
 display:flex;
 align-items: flex-start;
 min-width: 280px;
 @media (max-width: 791px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
 grid-template-areas:
      "logo rest "
      "logo rest "
      "logo rest";
  } 
`;