import styled from 'styled-components';

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

export { SectionTitle, AsideArea}