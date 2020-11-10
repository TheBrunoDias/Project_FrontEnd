//STYLED-COMPONENTS 
import { Container, HomeHeader, HomeContainer,SectionTitle, AsideArea } from "./style";

//ICONS
import { FiSmile, FiSearch } from 'react-icons/fi';
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
                    <SectionTitle> Postagens Mais recentes: </SectionTitle>
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                    />
                </section>

                <AsideArea>
                    <SectionTitle>Procurar</SectionTitle>
                    <form action="/" method="get">
                        <input type="text" name="search" id="search"  placeholder="O que está procurando?"/>
                        <button type="submit"><FiSearch/></button>
                    </form>

                </AsideArea>
            </HomeContainer>
        </Container>
    );
}