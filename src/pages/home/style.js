import styled from 'styled-components';

//ANIMATIONS
import HeaderBackground from '../../styles/keyframes/HeaderBackground';
import {TitleAfterAnimation, TitleAnimation, SubTitleAnimation} from '../../styles/keyframes/HeaderTitle';

const Container = styled.div`
    width: 100vw;
`;


const HomeHeader = styled.header`
    width:100vw;
    background: linear-gradient(-45deg, ${props => props.theme.colors.featured}, ${props => props.theme.colors.background}) no-repeat;
    background-size: 300% 300%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    animation: ${HeaderBackground} 2s linear infinite alternate;

    h1{
        position: relative;
        font-size: 5vw;
        
        color: transparent;
        margin-bottom: 2vh;
        overflow: hidden;
        animation: ${TitleAnimation} 0.5s linear  2s forwards;
    }
    h1::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, ${props => props.theme.colors.background_featured}, ${props => props.theme.colors.background}) no-repeat;
            animation: ${TitleAfterAnimation} 2s ease-in-out 1 1s;
    }

    p{
        font-size: 20px;
        animation: ${SubTitleAnimation} 2s cubic-bezier(0.4,-0.98, 0.04, 1.56) forwards;
    }
    

`;

const HomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5vw;
    
    section{
        width: 50vw;
    }
`;

const AsideArea = styled.aside`
        color: ${props => props.theme.colors.text_featured};
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        right: 10vw;
        width: 30vw;
        border: 1px solid ${props => props.theme.colors.text_featured};

        form{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px 0;
            margin: 2vh 0;

            input{
                width: 80%;
                height: 4vh;
                padding: 10px;
                font-style: italic;
                border: 1px solid ${props => props.theme.colors.text_featured};
                
            }
            button{
                width: 18%;
                border: 1px solid ${props => props.theme.colors.text_featured};
            }
        }


`;

const SectionTitle = styled.h3`
            width: 100%;
            color: ${props => props.theme.colors.text_featured};
            background-color: ${props => props.theme.colors.background_featured};
            padding: 10px;
            border: 1px solid ${props => props.theme.colors.text_featured};
`;


export {
    Container,
    HomeHeader,
    HomeContainer,
    SectionTitle,
    AsideArea
}