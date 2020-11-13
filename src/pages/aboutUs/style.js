
import styled from 'styled-components';

const Container = styled.div`
    padding: 50px 10vw;
    height: 100vh;
    width: 100vw;
    margin: auto;
    text-align: center;   
    background-color: #f3f3f3;
    color: black;
`;

const Title = styled.h1`
    text-transform: uppercase;
`;

const Divider = styled.div`
    width: 60px;
    height: 5px;
    margin: 4vh auto;
    background-color: ${props => props.theme.colors.text_featured};
`;

const Slide = styled.div`  
    text-align: left;
    width: 80%;
    margin: auto;

    img{
        width: 100%;
        height: 50%;
        object-fit:contain;
    }

    h3{
        text-transform: uppercase;
        color: ${props => props.theme.colors.text_featured};
        padding: 5% 0;
    }

    h4{
        text-transform: uppercase;
        font-weight: bold;
        padding: 3% 0;

        span{
            margin-left: 3%;
            padding-left: 3%;
            border-left: 2px solid ${props => props.theme.colors.text_featured};
        }
    }
`;

const Email = styled.p` 
    display: flex;
    align-items: center;
    padding: 3% 0;
`;


export {
    Container,
    Slide,
    Email,
    Title,
    Divider

}