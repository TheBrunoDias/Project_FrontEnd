import { Container } from './style';

import ErrorImg from '../../assets/images/errorimg.png';

import Header from '../../components/header';

export default function PageNotFound() {
    return (
        <>
            <Header title="ooops! " subtitle="Parece que não há nada por aqui" />
            <Container>
                    <img src={ErrorImg} alt="Page Not Found" />
            </Container>
        </>
    );
}