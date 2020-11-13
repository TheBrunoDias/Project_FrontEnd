import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.background_featured};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  text-transform: uppercase;
  z-index: 10;
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
  background-color: ${props => props.theme.colors.background};
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
    background-color: ${props => props.theme.colors.featured};
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
