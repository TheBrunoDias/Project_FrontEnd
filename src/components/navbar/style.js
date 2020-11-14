import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.background_secondary};
  box-shadow: 0 5px 10px ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
  z-index: 10;

  nav {
    margin: auto;
    max-width: 75vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SignContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Divider = styled.div`
  width: 2px;
  border-radius: 40px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  a {
    transition: 0.5s;
    padding: 10px;
  }

  a:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    border-radius: 50px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DropDown = styled.div`
  position: absolute;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 10px 5px;
`;

export {
  Container,
  SignContainer,
  Divider,
  SocialContainer,
  LeftContainer,
  RightContainer,
  DropDown,
  ListItem,
};
