import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  margin: 15px auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    button {
      width: 100%;
      padding: 15px;
    }
    textarea {
      width: 100%;
      margin: 15px 0;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: center;
  align-items: flex-start;
  margin: 15px;
  input {
    width: 100%;
    padding: 15px;
  }
`;

export { Container, InputContainer };
