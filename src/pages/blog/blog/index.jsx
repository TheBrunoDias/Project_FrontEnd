//STYLED-COMPONENTS 
import { Container, HomeContainer, SectionTitle,CardContainer } from "./style";

import { Link } from "react-router-dom";

//COMPONENTS
import AsideBlog from "../../../components/aside";
import Post from "../../../components/post";
import Header from "../../../components/header";
import Card from "../../../components/card";

//ICONS
import {RiTeamLine} from 'react-icons/ri';
import {HiOutlinePuzzle} from 'react-icons/hi';
import {CgGames} from 'react-icons/cg';

//IMAGES
import imgBlog from '../../../assets/images/image.png';

export default function Blog() {
    return (
        <Container>
            <Header title="Bem Vindo" subtitle="Você está na Página Principal" />

            <CardContainer>
                <Link><Card icon={<RiTeamLine size={100}/>} title="Sobre Nós" /></Link>
                <Link><Card icon={<HiOutlinePuzzle size={100}/>} title="Sobre TEA" /></Link>
                <Link><Card icon={<CgGames size={100}/>} title="Jogos Educativos" /></Link>

            </CardContainer>

            <HomeContainer>
                <section>
                    <SectionTitle> Postagens Mais recentes: </SectionTitle>
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