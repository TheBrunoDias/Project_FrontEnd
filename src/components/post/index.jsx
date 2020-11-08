import { Container, Image, Title, Description, Author, Date } from './style';

export default function Post({ img, title, description, author, date }) {
    return (
        <Container>
            <Image src={img} alt="" />

            <Title>{title} </Title>
            <Description>{description}</Description>
            <Author>{author}</Author>
            <Date>{date}</Date>

        </Container>

    );
}