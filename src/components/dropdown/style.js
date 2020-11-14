import styled from "styled-components";

import DropDownContainer from "../../styles/keyframes/DropDownContainer";

const Container = styled.div`
  position: relative;
  margin-right: 2vw;
`;

const OpenModal = styled.a`
  transition: opacity 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.55;
  }
`;
const ChildrenContainer = styled.div`
  position: absolute;
  display: flex;
  width: 10vw;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 1vh;
  background-color: ${(props) => props.theme.colors.background_secondary};
  animation: ${DropDownContainer} 0.5s normal;
  z-index: 1000;
`;

export { Container, OpenModal, ChildrenContainer };
