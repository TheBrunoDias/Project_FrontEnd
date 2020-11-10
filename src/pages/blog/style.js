import styled from 'styled-components';

const Container = styled.div`
    width: 80vw;
    margin: 100px auto; 
    padding:30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const BlogArea = styled.div`
    width: 41vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${props => props.theme.colors.text_featured};
    padding: 10px 0;
`;

const BlogImg = styled.img`

    width: 40vw;
`;

const Title = styled.h1`
    padding: 4px;
    padding-left: 15px;
    width: 100%;
    text-transform: uppercase;
    border: 1px solid ${props => props.theme.colors.text_featured};
`;

const AuthorArea = styled.div` 
    width: 100%;
    padding: 0 15px;
    opacity: 0.8;
    color: ${props => props.theme.colors.background_featured};
    background-color: ${props => props.theme.colors.text_featured};
    display: flex;
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