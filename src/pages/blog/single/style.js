import styled from "styled-components";

const Container = styled.div`
  width: 75vw;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BlogArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BlogImg = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  padding: 4px 0;
  text-transform: uppercase;
`;

const AuthorArea = styled.div`
  width: 100%;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.background_featured};
  background-color: ${(props) => props.theme.colors.text_featured};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
`;

const SubTitle = styled.h4`
  margin: 2vh 0;
  width: 100%;
  text-transform: uppercase;
`;

const TextContainer = styled.p`
  text-align: justify;
`;
export {
  BlogArea,
  Container,
  BlogImg,
  Title,
  AuthorArea,
  SubTitle,
  TextContainer,
};
