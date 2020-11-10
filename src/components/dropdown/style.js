import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropDownContainer from '../../styles/keyframes/DropDownContainer';

const Container = styled.div`
   margin-right: 2vw;
    
`;

const OpenModal = styled(Link)`
    position: relative;
    color: ${props => props.theme.colors.text_featured};
    transition: opacity 0.5s;
    cursor:pointer;

    &:hover{
        opacity: 0.55;
    }
`;


const ChildrenContainer = styled.div`
    position: absolute;
    width: 10vw;
    display: flex;
    border: 1px solid ${props=> props.theme.colors.text_featured};
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 1vh;
    background-color: ${props => props.theme.colors.background_featured};
    border-radius: 5px;
    animation: ${DropDownContainer} 0.5s normal;
`;

export {
    Container,
    OpenModal,
    ChildrenContainer
}