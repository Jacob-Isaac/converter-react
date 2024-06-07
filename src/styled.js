import styled from "styled-components";


export const CenterBoxProperties = styled.form`
    color: rgb(24, 24, 24);
    position: absolute;
    margin-top: 150px;
    margin-bottom: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    align-self: center;
    width: 70%;
    min-width: 250px;
    max-height  : 600px;
  @media (min-width: 800px) {
      width: 750px;
      height  : 600px;
  }
  `;
export const Flex = styled.main`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
 
  `;