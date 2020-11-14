//STYLES FROM STYLED-COMPONENTS
import { Link } from 'react-router-dom';
import { Container, FormContainer } from './style';

export default function Login() {
    return (
        <Container>
            <FormContainer>
                <h3>LOGIN</h3>
                <input type="email" name="user_email" id="user_email" placeholder="Digite seu Email" />
                <input type="password" name="user_password" id="user_password" placeholder="Digite sua Senha" />
                <button>Entrar</button>
                <hr />
                <h3>CADASTRO</h3>
                <input type="email" name="register_email" id="register_email" placeholder="Informe seu email" />
                <input type="text" name="register_name" id="register_name" placeholder="Informe seu nome completo" />
                <input type="password" name="register_password" id="register_password" placeholder="Informe a senha" />
                <input type="password" name="repeat_password" id="repeat_password" placeholder="Repita a senha" />
                <button>Cadastrar</button>
                <hr />
                <div>
                    <Link to="/">Esqueceu a senha?</Link>
                </div>
            </FormContainer>

        </Container>
    )
}