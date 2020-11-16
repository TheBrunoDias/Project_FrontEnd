import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  margin: auto;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  width: 80%;
  img {
    margin: 0 50px;
    border-radius: 100%;
    width: 200px;
  }
`;

const UserInformations = styled.div`
  display: flex;
  line-height: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
    padding: 30px 0;
    h3 {
      margin-right: 30px;
    }
  }
`;

const Divider = styled.div`
  margin: 50px 0;
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
`;

const PostsContainer = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const UserPost = styled.div`
  width: 30%;
  margin: 5% 0;
  img {
    width: 300px;
  }
`;

const NewPostArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  Container,
  UserContainer,
  UserInformations,
  Divider,
  UserPost,
  Input,
  PostsContainer,
  NewPostArea,
};
