//STYLED-COMPONENTS 
import { Container, HomeHeader, HomeContainer,SectionTitle} from "./style";

//COMPONENTS
import AsideBlog from "../../components/aside";

//ICONS
import {FiSmile} from 'react-icons/fi';
import Post from "../../components/post";

//IMAGES
import imgBlog from '../../assets/images/image.png';
import { Link } from "react-router-dom";

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
                    <Link to="/blog">
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                        />
                    </Link>
                    <Link to="/blog">
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                        />
                    </Link>
                    <Link to="/blog">
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                        />
                    </Link>
                    <Link to="/blog">
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                        />
                    </Link>
                    <Link to="/blog">
                    <Post 
                        img={imgBlog} 
                        title="Blog Title" 
                        description="lorem ipsum e blá blá blá" 
                        author="Bruno Dias"
                        date="30/10/2020" 
                        />
                    </Link>
                </section>

                <AsideBlog/>
                
            </HomeContainer>
        </Container>
    );
}