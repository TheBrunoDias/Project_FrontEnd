import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  margin: auto;
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  margin: auto;
  height: 50%;
  margin-top: 15vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  button {
    padding: 2% 1%;
    margin: 1% 0;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

export { Container, FormContainer };
