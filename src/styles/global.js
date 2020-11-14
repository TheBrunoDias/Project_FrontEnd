import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline-color: ${(props) => props.theme.colors.secondary};
        font-family: 'Raleway', sans-serif;
    }

    body{
        background:${(props) => props.theme.colors.background_primary};
        background-size: 500% 500%;
        color: ${(props) => props.theme.colors.primary};
        overflow-x: hidden;
        transition: color  0.5s, background 0.5s;
    }

    h1,h2,h3,h4,h5,h6{
        color: ${(props) => props.theme.colors.secondary};
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondary};
    }

    input, textarea{
        background-color: transparent;
        color: ${(props) => props.theme.colors.secondary};
        border: 2px solid ${(props) => props.theme.colors.secondary};
    }

    button{
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary}
    }
`;
