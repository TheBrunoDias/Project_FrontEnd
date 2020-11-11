import styled from 'styled-components';


const ParallaxLeft = styled.div`
    height: 100vh;
    width: 60%;
    position: relative;
    background-attachment: fixed;
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: space-between;
    border-right: 200px solid ${props => props.theme.colors.background_featured};
    border-top:100vh solid transparent;
`;

const CoverLeft = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.background_featured};
    display: flex;
    padding: 2%;
    justify-content: center;
    align-items: flex-end;
    text-align:end;
    flex-direction: column;
    width: 40%;
    height: 100vh;
    right: 0;
    color: white;

    div{
        width: 10%;
        height: 1%;
        background: ${props => props.theme.colors.text_featured};
        margin: 20px 0;

    }

    h2{
        color: ${props => props.theme.colors.text_featured};
       
    }

`;

const ParallaxRight = styled.div`
    height: 100vh;
    width: 60%;
    margin: 0 39%;
    position: relative;
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: space-between;
    border-left: 200px solid ${props => props.theme.colors.background_featured};
    border-top:100vh solid transparent;
`;

const CoverRight = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.background_featured};
    display: flex;
    padding: 2%;
    justify-content: center;
    align-items: flex-start;
    text-align:left;
    flex-direction: column;
    width: 40%;
    height: 100vh;
    left: 0;
    color: white;

    div{
        width: 10%;
        height: 1%;
        background: ${props => props.theme.colors.text_featured};
        margin: 20px 0;

    }

    h2{
        color: ${props => props.theme.colors.text_featured};
       
    }

`;

const FullParallax = styled.div`
    height: 50vh;
    width: 50vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export {
    ParallaxLeft,
    CoverLeft,
    ParallaxRight,
    CoverRight,
    FullParallax
}