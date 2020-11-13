//REACT ROUTER DOM
import {useLocation} from 'react-router-dom';

//SLIDER FROM REAT-SLICK
import Slider from 'react-slick';

//ICONS
import {AiTwotoneMail} from 'react-icons/ai';

//COMPONENTS
import Header from '../../components/header';

//STYLES FROM STYLED COMPONENT
import { Container, Slide, Email, Title, Divider } from './style';



const Members = [
{
        image: 'https://avatars3.githubusercontent.com/u/68758215?s=460&u=e996ee6ea0fdc629a90e2eb69d389b5cca9f362e&v=4',
        name: 'Bruno Sousa Dias',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e fã de um bom café',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/63818742?s=460&u=9a6eb41cff8cb23c744768f4973c8d0696571f74&v=4',
        name: 'Marcelo Fortes',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e rei delas',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/71359480?s=460&u=4623ab9eb861a3c7dcc8b61ac00759f2c850bee1&v=4',
        name: 'Mariana Gonzales',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programadora e curte uns rolês diferenciados',
    },
    {
        image: 'https://avatars3.githubusercontent.com/u/68758215?s=460&u=e996ee6ea0fdc629a90e2eb69d389b5cca9f362e&v=4',
        name: 'Bruno Sousa Dias',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e fã de um bom café',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/63818742?s=460&u=9a6eb41cff8cb23c744768f4973c8d0696571f74&v=4',
        name: 'Marcelo Fortes',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e rei delas',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/71359480?s=460&u=4623ab9eb861a3c7dcc8b61ac00759f2c850bee1&v=4',
        name: 'Mariana Gonzales',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programadora e curte uns rolês diferenciados',
    },
    {
        image: 'https://avatars3.githubusercontent.com/u/68758215?s=460&u=e996ee6ea0fdc629a90e2eb69d389b5cca9f362e&v=4',
        name: 'Bruno Sousa Dias',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e fã de um bom café',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/63818742?s=460&u=9a6eb41cff8cb23c744768f4973c8d0696571f74&v=4',
        name: 'Marcelo Fortes',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e rei delas',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/71359480?s=460&u=4623ab9eb861a3c7dcc8b61ac00759f2c850bee1&v=4',
        name: 'Mariana Gonzales',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programadora e curte uns rolês diferenciados',
    },
    {
        image: 'https://avatars3.githubusercontent.com/u/68758215?s=460&u=e996ee6ea0fdc629a90e2eb69d389b5cca9f362e&v=4',
        name: 'Bruno Sousa Dias',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e fã de um bom café',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/63818742?s=460&u=9a6eb41cff8cb23c744768f4973c8d0696571f74&v=4',
        name: 'Marcelo Fortes',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programador e rei delas',
    },
    {
        image: 'https://avatars1.githubusercontent.com/u/71359480?s=460&u=4623ab9eb861a3c7dcc8b61ac00759f2c850bee1&v=4',
        name: 'Mariana Gonzales',
        profisson: 'Estudante',
        work: 'Uniamérica',
        email: 'test@test.com.br',
        description: 'Aspirante a programadora e curte uns rolês diferenciados',
    },

];

function CardContainer({ image, name, profisson, work, description, email }) {
    return (
        <Slide>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <h4>{profisson} <span>{work}</span></h4>
                <p>{description}</p>
                <Email><AiTwotoneMail/>  {email}</Email>
            </div>
        </Slide>
    );
}

export default function AboutUs() {

    const {pathname} = useLocation();

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 1000,
        ease: 'ease-in-out',
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            {
                pathname !== '/about-us' ? null : <Header title ="Sobre Nós" subtitle="Conheça o Time"/>
            }
        <Container>
            <Title>Conheça o Time</Title>
            <Divider></Divider>
            <Slider {...settings}>
                {
                    Members.map((member, index) => {
                        return (
                            <div key={index}>
                                <CardContainer
                                    image={member.image}
                                    name={member.name}
                                    profisson={member.profisson}
                                    work={member.work}
                                    age={member.age}
                                    description={member.description}
                                    email={member.email}
                                />
                            </div>
                        );
                    }
                    )
                }
            </Slider>

        </Container>
    </>
    );
}

