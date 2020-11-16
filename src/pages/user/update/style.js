import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
  text-transform: uppercase;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  input,
  button {
    padding: 15px;
    cursor: pointer;
  }
`;

const Informations = styled.div`
  text-transform: none;
  max-width: 30%;
`;

export { Container, FormContainer, Informations };
