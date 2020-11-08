//STYLED-COMPONENTS 
import { Container, HomeHeader, HomeContainer } from "./style";

//ICONS
import { FiSmile } from 'react-icons/fi';
import Post from "../../components/post";

//IMAGES
import imgBlog from '../../assets/images/image.png';

export default function Home() {
    return (
        <Container>
            <HomeHeader>
                <h1>Bem vindo </h1>
                <p>Obrigado por fazer parte dessa historia <FiSmile /></p>
            </HomeHeader>

            <HomeContainer>
                <section>
                    <h3> Postagens Mais recentes: </h3>
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                    />
                </section>

                <aside>
                    <h3>Procurar</h3>
                </aside>
            </HomeContainer>
        </Container>
    );
}