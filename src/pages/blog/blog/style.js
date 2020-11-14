import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const HomeContainer = styled.div`
  margin: auto;
  max-width: 75vw;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  section {
    width: 50vw;
  }
`;

export { Container, HomeContainer };
