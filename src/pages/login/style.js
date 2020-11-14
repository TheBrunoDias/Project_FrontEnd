import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  height: 100vh;
  margin: auto;
`;

const FormContainer = styled.div`
  margin: auto;
  height: 50%;
  margin-top: 15vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input,
  button {
    padding: 2% 1%;
    margin: 1% 0;
  }
`;

export { Container, FormContainer };
