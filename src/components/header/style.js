import styled from "styled-components";
import {
  TitleAfterAnimation,
  SubTitleAnimation,
} from "../../styles/keyframes/HeaderTitle";

const HomeHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background_secondary};
  text-transform: uppercase;
  padding: 50px;
  margin: 5% 0;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 75vw;

  h1 {
    animation: ${TitleAfterAnimation} 2s normal;
  }

  div {
    width: 2px;
    height: 50px;
    margin: 0 10px;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  p {
    opacity: 0;
    animation: ${SubTitleAnimation} 2s 1s normal forwards;
  }
`;

export { HomeHeader, Container };
