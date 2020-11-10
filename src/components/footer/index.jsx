import { useContext} from 'react'
import { ThemeContext } from 'styled-components';


import { Container, LeftFooter, SocialContainer, RightFooter, BackToTopBottom } from './style';

import { FiFacebook, FiInstagram, FiGithub, FiArrowUp } from 'react-icons/fi';


export default function Footer() {
    const { colors } = useContext(ThemeContext);
    return (
        <Container>
            <LeftFooter>
                <h1>uniamericon</h1>
                <p>Obrigado por fazer parte dessa história</p>

                <SocialContainer>
                    <a href="/" target="_blank"><FiFacebook size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"><FiInstagram size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"> <FiGithub size={20} color={colors.text_featured} /></a>
                </SocialContainer>
            </LeftFooter>

            <RightFooter>
                <h2>Fale Conosco!</h2>
                <form action="/" method="get">
                    <input type="text" name="contact__name" id="contact__name" placeholder="Nome Completo"/>
                    <input type="email" name="contact__email" id="contact__email" placeholder="Insira seu Email"/>
                    <textarea name="contact__message" id="contact__message" cols="30" rows="10" placeholder="Insira a Mensagem"></textarea>
                    <input type="submit" value="Enviar Mensagem"/>
                </form>
            </RightFooter>

            <BackToTopBottom onClick={() => {
                 window.scrollBy({
                    top: -window.innerHeight * 2,
                    behavior: "smooth",
                });
            }}>
                <FiArrowUp size={32} color={colors.background_featured}/>
            </BackToTopBottom>
        </Container>
    );
}