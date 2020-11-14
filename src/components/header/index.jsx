import { HomeHeader, Container } from './style';

export default function Header({ title, subtitle }) {
    return (
        <HomeHeader>
            <Container>
                <h1>{title}</h1>
                <div></div>
                <p>{subtitle}</p>
            </Container>
        </HomeHeader>
    );
}