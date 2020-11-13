
import { Container } from './styles';

export default function Card({ icon, title }) {
    return (
        <Container>
            {icon}
            <h2>{title}</h2>
        </Container>
    );
}