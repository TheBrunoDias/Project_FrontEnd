import {createGlobalStyle} from 'styled-components';

import HeaderBackground from './keyframes/HeaderBackground';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline-color: ${props => props.theme.colors.featured};
    }

    body{
        background: linear-gradient(45deg,${props => props.theme.colors.featured},${props => props.theme.colors.background}, ${props => props.theme.colors.background_featured}, ${props => props.theme.colors.featured});
        background-size: 500% 500%;
        color: ${props => props.theme.colors.text};
        font-family: 'Roboto Condensed', sans-serif;
        height: 100vh;
        overflow-x: hidden;
        transition: color  0.5s, background 0.5s;
        animation: ${HeaderBackground} 20s linear infinite alternate;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
    }
`;