import styled,  {keyframes} from 'styled-components';

const Container = styled.div`
    width: 100vw;
`;

const H1Animation = keyframes`
    from{
        transform: scale(0,0);
        
    }
    to{
        transform: scale(1,1);
    }
`;

const PAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateY(-300%);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

const HomeHeader = styled.header`
    width:100vw;
    background: linear-gradient(45deg, ${props => props.theme.colors.background_featured}, ${props => props.theme.colors.background});
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    h1{
        font-size: 5vw;
        margin-bottom: 2vh;
        /* animation: ${H1Animation} 1s normal; */
    }

    p{
        animation: ${PAnimation} 1s normal;

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
    aside{
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 10vw;
        width: 30vw;
        border: 1px solid ${props => props.theme.colors.text_featured};
    }
`;
export {
    Container,
    HomeHeader,
    HomeContainer
}