// STYLES FROM STYLED-COMPONENTS
import { Container, Title, Description, Author, Date } from './style';

export default function Post({ img, title, description, author, date }) {
  return (
    <Container style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <Title>{title} </Title>
      <Description>{description}</Description>
      <Author>{author}</Author>
      <Date>{date}</Date>

    </Container>

  );
}
