//STYLED-COMPONENTS 
import { Container,HomeHeader } from "./style";

//ICONS
import {FiSmile} from 'react-icons/fi';

export default function Home(){
    return(
        <Container>
            <HomeHeader>
                <h1>Bem vindo </h1>
                <p>Obrigado por fazer parte dessa historia <FiSmile/></p>
            </HomeHeader>
        </Container>
    );
}