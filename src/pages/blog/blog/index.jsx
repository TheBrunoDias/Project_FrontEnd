//STYLED-COMPONENTS 
import { Container, HomeContainer } from "./style";

//REACT ROUTER DOM LINKS
import { Link } from "react-router-dom";

//COMPONENTS
import AsideBlog from "../../../components/aside";
import Post from "../../../components/post";
import Header from "../../../components/header";

//IMAGES
import imgBlog from '../../../assets/images/image.png';

export default function Blog() {
    return (
        <Container>
            <Header title="Bem Vindo" subtitle="Você está na Página Principal" />

            <HomeContainer>
                <section>
                    <Link to="/blog/single">
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

                <AsideBlog />

            </HomeContainer>
        </Container>
    );
}