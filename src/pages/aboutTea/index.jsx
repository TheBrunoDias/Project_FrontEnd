
import { useLocation } from 'react-router-dom';

//STYLES FROM STYLED CROMPONENTS
import { ParallaxLeft, CoverLeft, ParallaxRight, CoverRight, FullParallax, CoverCenter, Container, Parallax } from './style';

import Header from '../../components/header';

//PARALLAX IMAGES
import parallax1 from '../../assets/images/parallax1.png';
import parallax2 from '../../assets/images/parallax2.jpg';
import parallax4 from '../../assets/images/parallax4.jpg';

export default function AboutTea() {

    const { pathname } = useLocation();
    return (
        <Container>

            {
                pathname !== '/about-tea' ? null : <Header title="Transtorno do Espectro Autista" subtitle="Conheça o nosso projeto" />
            }
            <Parallax>
                <CoverLeft>
                    <h2>Transtorno do Espectro Autista (TEA) </h2>
                    <div></div>
                    <p>
                        O Transtorno do Espectro Autista (TEA) refere-se a uma série de condições caracterizadas por desafios com habilidades sociais, comportamentos repetitivos, fala e comunicação não-verbal, bem como por forças e diferenças únicas.
                    <br />
                    Os sinais mais óbvios do Transtorno do Espectro Autista tendem a aparecer entre 2 e 3 anos de idade. Em alguns casos, ele pode ser diagnosticado por volta dos 18 meses.
                    <br />
                    Sabemos agora que não há um autismo, mas muitos tipos, causados ​​por diferentes combinações de influências genéticas e ambientais. O termo “espectro” reflete a ampla variação nos desafios e pontos fortes possuídos por cada pessoa com autismo.

                </p>
                </CoverLeft>
                <ParallaxLeft style={{ backgroundImage: `url(${parallax2})` }}>
                </ParallaxLeft>
            </Parallax>

            <Parallax>

                <CoverRight>
                    <h2>Transtorno do Espectro Autista (TEA) </h2>
                    <div></div>
                    <p>
                        O Transtorno do Espectro Autista (TEA) refere-se a uma série de condições caracterizadas por desafios com habilidades sociais, comportamentos repetitivos, fala e comunicação não-verbal, bem como por forças e diferenças únicas.
                    <br />
                    Os sinais mais óbvios do Transtorno do Espectro Autista tendem a aparecer entre 2 e 3 anos de idade. Em alguns casos, ele pode ser diagnosticado por volta dos 18 meses.
                    <br />
                    Sabemos agora que não há um autismo, mas muitos tipos, causados ​​por diferentes combinações de influências genéticas e ambientais. O termo “espectro” reflete a ampla variação nos desafios e pontos fortes possuídos por cada pessoa com autismo.

                </p>
                </CoverRight>


                <ParallaxRight style={{ backgroundImage: `url(${parallax1})` }}>
                </ParallaxRight>
            </Parallax>
            <FullParallax style={{ backgroundImage: `url(${parallax4})` }}>
                <CoverCenter>
                    <h2>Transtorno do Espectro Autista (TEA) </h2>
                    <div></div>
                    <p>
                        O Transtorno do Espectro Autista (TEA) refere-se a uma série de condições caracterizadas por desafios com habilidades sociais, comportamentos repetitivos, fala e comunicação não-verbal, bem como por forças e diferenças únicas.
                    <br />
                    Os sinais mais óbvios do Transtorno do Espectro Autista tendem a aparecer entre 2 e 3 anos de idade. Em alguns casos, ele pode ser diagnosticado por volta dos 18 meses.
                    <br />
                    Sabemos agora que não há um autismo, mas muitos tipos, causados ​​por diferentes combinações de influências genéticas e ambientais. O termo “espectro” reflete a ampla variação nos desafios e pontos fortes possuídos por cada pessoa com autismo.

                </p>
                </CoverCenter>
            </FullParallax>
        </Container>
    );
}