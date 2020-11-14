import styled from "styled-components";

const AsideArea = styled.aside`
  color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  display: flex;
  background-color: ${(props) => props.theme.colors.background_secondary};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 2vw;
  right: 10vw;
  width: 20vw;

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    margin: 2vh 0;

    input {
      width: 80%;
      height: 4vh;
      padding: 10px;
      font-style: italic;
    }
    button {
      width: 18%;
    }
  }
`;

const Categories = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  li {
    display: inline-block;
    padding: 10px 0;
    transition: 1s;
    position: relative;
  }

  li::before {
    position: absolute;
    transition: 1s;
    content: "";
    height: 1%;
    width: 0;
    bottom: 0;
    right: 0;
  }

  li:hover::before {
    background: ${(props) => props.theme.colors.secondary};
    width: 100%;
    left: 0;
  }
`;
export { AsideArea, Categories };
