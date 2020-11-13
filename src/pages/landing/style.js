import styled from 'styled-components';

//ANIMATIONS KEYFRAMES
import HeaderBackground from '../../styles/keyframes/HeaderBackground';
import { SubTitle, HeaderButtonHover } from '../../styles/keyframes/Landing';

const Container = styled.div`
  width: 100vw;

  header {
    height: 95vh;
    display: flex;
    align-items: center;
    padding-top: 25vh;
    text-align: center;
    flex-direction: column;
    background: linear-gradient(
        -45deg,
        ${props => props.theme.colors.text_featured},
        ${props => props.theme.colors.background},
        ${props => props.theme.colors.background_featured},
        ${props => props.theme.colors.text_featured}
      )
      no-repeat;
    animation: ${HeaderBackground} 10s ease-in-out infinite alternate;
    background-size: 500% 500%;

    div {
      text-transform: uppercase;
      padding: 3%;
      color: ${props => props.theme.colors.text_featured};

      h1 {
        font-size: 60px;
        opacity: 0;
        animation: ${SubTitle} 1s cubic-bezier(1, 0.36, 0.5, 1.08) forwards;
      }
      h2 {
        font-size: 50px;
        opacity: 0;
        animation: ${SubTitle} 1s 1s cubic-bezier(1, 0.36, 0.5, 1.08) forwards;
      }
    }

    span {
      position: relative;
      background: ${props => props.theme.colors.text_featured};
      padding: 10px 20px;
      color: ${props => props.theme.colors.featured};
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;

      ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      :hover::after {
        background: ${props => props.theme.colors.text_featured};
        animation: ${HeaderButtonHover} 1s ease infinite;
      }
    }
  }
`;

export { Container };
