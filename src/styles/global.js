import { createGlobalStyle } from 'styled-components';

import HeaderBackground from './keyframes/HeaderBackground';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline-color: ${props => props.theme.colors.featured};
        font-family: 'Raleway', sans-serif;
    }

    body{
        background:${props => props.theme.colors.background};
        background-size: 500% 500%;
        color: ${props => props.theme.colors.text};
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
