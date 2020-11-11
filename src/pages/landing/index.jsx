import { Link } from 'react-router-dom';
import { Container} from './style';

import AbouteTea from '../aboutTea';

export default function Landing() {
    return (
        <Container>
            <header>
                <div>
                    <h1>Bem vindo</h1>
                    <h2>Uniamericon</h2>
                </div>
                <Link to="/blog">
                    <span>Blog</span>
                </Link>
            </header>

            <AbouteTea/>
            

        </Container>
    );
}