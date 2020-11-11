import styled from 'styled-components';

const Container = styled.div`
    margin: 2vw 0;
    position: relative;
    width: 50vw;
    height: 50vh;
    transition: 0.55s;
    overflow: hidden;
    border: 1px solid ${props => props.theme.colors.text_featured};

    &:hover{
        transform: scale(1.01,1.01);
    }
`;

const Title = styled.h2`
    padding: 0 20px;
    position: absolute;
    bottom: 20%;
    color: white;
    z-index:10;
`;

const Description = styled.p`
    padding: 0 20px;
    position: absolute;
    bottom: 10%;
    color: white;
    z-index:10;
`;

const Author = styled.h3`
    padding: 0 20px;
    right: 0;
    position: absolute;
    bottom: 20%;
    color: white;
    z-index:10;
`;

const Date = styled.p`
    padding: 0 20px;
    right: 0;
    position: absolute;
    bottom: 10%;
    color: white;
    z-index:10;
`;



export {
    Container,
    Title,
    Description,
    Author,
    Date,
}