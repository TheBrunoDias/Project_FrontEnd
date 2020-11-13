import styled from 'styled-components';

//ANIMATIONS
import HeaderBackground from '../../styles/keyframes/HeaderBackground';
import {
  TitleAfterAnimation,
  TitleAnimation,
  SubTitleAnimation,
} from '../../styles/keyframes/HeaderTitle';

const HomeHeader = styled.header`
  width: 100vw;
  padding: 80px 0;
  background: linear-gradient(
      -45deg,
      ${props => props.theme.colors.text_featured},
      ${props => props.theme.colors.background},
      ${props => props.theme.colors.background_featured},
      ${props => props.theme.colors.text_featured}
    )
    no-repeat;
  background-size: 500% 500%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  animation: ${HeaderBackground} 10s ease-in-out infinite alternate;
  border-bottom: 2px solid ${props => props.theme.colors.text};

  h1 {
    position: relative;
    font-size: 5vw;

    color: transparent;
    margin-bottom: 2vh;
    overflow: hidden;
    animation: ${TitleAnimation} 0.5s linear 2s forwards;
  }
  h1::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        -45deg,
        ${props => props.theme.colors.background_featured},
        ${props => props.theme.colors.background}
      )
      no-repeat;
    animation: ${TitleAfterAnimation} 2s ease-in-out 1 1s;
  }

  p {
    font-size: 20px;
    animation: ${SubTitleAnimation} 2s cubic-bezier(0.4, -0.98, 0.04, 1.56)
      forwards;
  }
`;

export default HomeHeader;
