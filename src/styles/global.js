import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline-color: ${props => props.theme.colors.featured};
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Roboto Condensed', sans-serif;
        height: 100vh;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
    }
`;