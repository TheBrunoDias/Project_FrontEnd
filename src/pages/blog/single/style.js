import styled from 'styled-components';

const Container = styled.div`
    width: 85vw;
    margin: 100px auto; 
    padding:30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const BlogArea = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BlogImg = styled.img`

    width: 100%;
`;

const Title = styled.h1`
    padding: 4px;
    padding-left: 15px;
    text-transform: uppercase;
`;

const AuthorArea = styled.div` 
    width: 100%;
    padding: 15px 15px;
    opacity: 0.8;
    color: ${props => props.theme.colors.background_featured};
    background-color: ${props => props.theme.colors.text_featured};
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
    TextContainer
}