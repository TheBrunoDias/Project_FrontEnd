//REACT HOOKS
import { useContext, useEffect, useState } from 'react'

//REAT ROUTER DOM
import { useLocation } from 'react-router-dom';

//THEME DARK AND LIGHT CONTEXT FROM STYLED-COMPONENTS
import { ThemeContext } from 'styled-components';

//STYLEDS
import { Container, LeftFooter, SocialContainer, RightFooter, BackToTopBottom } from './style';

//ICONS
import { FiFacebook, FiInstagram, FiGithub, FiArrowUp } from 'react-icons/fi';

function BackToTop() {
    window.scrollBy({
        top: -document.body.scrollHeight,
        behavior: "smooth",
    });
}

export default function Footer() {
    const { colors } = useContext(ThemeContext);

    const [showButton, setShowButton] = useState(false);

    //RETURN THE CURRENT URL
    const { pathname } = useLocation();

    //SCROLL TO THE TOP WHEN URL CHANGES
    useEffect(() => {
        BackToTop();
    }, [pathname]);

    window.addEventListener('scroll', () => {
        setShowButton((window.scrollY > window.innerHeight / 2) ? true : false);
    })

    return (
        <Container>
            <LeftFooter>
                <h1>uniamericon</h1>

                <SocialContainer>
                    <a href="/" target="_blank"><FiFacebook size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"><FiInstagram size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"> <FiGithub size={20} color={colors.text_featured} /></a>
                </SocialContainer>
            </LeftFooter>

            <RightFooter>
                <h2>Fale Conosco!</h2>
                <form action="/" method="get">
                    <input type="text" name="contact__name" id="contact__name" placeholder="Nome Completo" />
                    <input type="email" name="contact__email" id="contact__email" placeholder="Insira seu Email" />
                    <textarea name="contact__message" id="contact__message" cols="30" rows="10" placeholder="Insira a Mensagem"></textarea>
                    <input type="submit" value="Enviar Mensagem" />
                </form>
            </RightFooter>

            {
                showButton ?
                    <BackToTopBottom onClick={() => { BackToTop() }}>
                        <FiArrowUp size={32} color={colors.background_featured} />
                    </BackToTopBottom>
                    : null
            }

        </Container>
    );
}