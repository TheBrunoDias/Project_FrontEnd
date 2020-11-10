import styled from 'styled-components';

const Container = styled.div`
    border-top: 2px solid ${props => props.theme.colors.text};
    height: 60vh;
    background:  ${props => props.theme.colors.background_featured};
    color:  ${props => props.theme.colors.text};
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    text-transform:uppercase;
`;

const SocialContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;

    a{
        transition: 0.5s;
        padding: 10px;
        
    }

    a:hover{
        background-color: ${props => props.theme.colors.featured};
        border-radius: 50px;
    }
`;

const LeftFooter = styled.div`
    height : 60%;
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
    flex-direction: column;
    h1{
        color: ${props => props.theme.colors.text_featured};
    }
`;

const RightFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        color: ${props => props.theme.colors.text_featured};
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input,textarea{
            font-style: italic;
            width: 200%;
            margin: 2%;
            padding: 5% 2%;
            color: ${props => props.theme.colors.featured}; 
        }
    }
`;

const BackToTopBottom = styled.button`
    outline: none;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10vh;
    right: 3vw;
    border-radius: 100px;
    border: 2px solid ${props => props.theme.colors.featured};
    transition: 1s;
    background: ${props => props.theme.colors.text_featured};
    cursor: pointer;
    :hover{
        opacity: 0.7;
        transform: rotate(360deg);
    }
`;

export {
    Container,
    LeftFooter,
    SocialContainer,
    RightFooter,
    BackToTopBottom
}