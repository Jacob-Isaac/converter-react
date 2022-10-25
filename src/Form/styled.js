import styled, { css } from "styled-components";

export const FormText = styled.p`
margin: 15px;
  margin-bottom: 30px;
  ${({ dateText }) =>
    dateText &&
    css`
      font-family: "Courier New", Courier, monospace;
      font-size: 14px;
    `}
    @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Wrap = styled.p`
margin: 15px;
@media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const Wrapper = styled.div`
margin-top:100px;
`;

export const FormResult = styled.p`
  margin-bottom: 30px;
  margin-top: 5%;
  white-space: pre-wrap;
  font-size: 30px;
  
  @media (max-width: 800px) {
   margin-left: 15px;
   margin-right: 15px;
   font-size: 25px;
  }
 
`;
export const FormInput = styled.input`
  width: 40%;
  height: 35px;
  border-radius: 20px;
  border: 1px solid black;
  padding: 10px;

  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const FormButton = styled.button`
  transition: all 0.3s ease-in-out;
  background-color: #5a5a90;
  border: none;
  padding: 10px;
  border-radius: 3px;

  @media (max-width: 800px) {
    transform: scale(1.2);
    &:active {
      transition: all 0.1s ease-in-out;
      filter: brightness(1.4);
      transform: scale(1);
    }
  }
  @media (min-width: 800px) {
    &:hover {
      cursor: pointer;
      transform:       scale(1.1);

    }
    &:active {
      transition: all 0.1s ease-in-out;
      filter: brightness(1.4);
    }
  }
`;
export const Error = styled.p`
  color: #b50000;
`;
export const Cog = styled.img`
  width: 70px;
  height: 70px;
  animation: transform 2s;
  @keyframes transform {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(359deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
