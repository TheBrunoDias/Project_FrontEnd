import styled from 'styled-components';

const Container = styled.div`
    margin: 2vw 0;
    position: relative;
    width: 50vw;
    height: 50vh;
    transition: 0.55s;
    overflow: hidden;

    &:hover{
        transform: scale(1.01,1.01);
    }
`;

const Image = styled.img`
    width: 100%;

`;

const Title = styled.h2`
    padding: 0 20px;
    top: 80%;
    position: absolute;
    color: white;
`;

const Description = styled.p`
    padding: 0 20px;
    top: 90%;
    position: absolute;
    color: white;
`;

const Author = styled.h3`
    padding: 0 20px;
    top: 80%;
    right: 0;
    position: absolute;
    color: white;
`;

const Date = styled.p`
    padding: 0 20px;
    top: 90%;
    right: 0;
    position: absolute;
    color: white;
`;



export {
    Container,
    Image,
    Title,
    Description,
    Author,
    Date,
}