import styled from 'styled-components';

const Container = styled.div`
    width: 25vw;
    height: 20vh;
    background-color: ${props => props.theme.colors.background_featured};
    border-radius: 10px;
    display: flex;
    margin: 0 2vw;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    text-transform:uppercase;
    color: ${props => props.theme.colors.text_featured};
    border: 2px solid ${props => props.theme.colors.text_featured};
    transition: 0.55s;

    :hover{
        background-color: ${props => props.theme.colors.text_featured};
        color: ${props => props.theme.colors.background_featured};
        transform: scale(1.1,1.1);
    }
`;


export {
    Container
}