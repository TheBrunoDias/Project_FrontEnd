import { useState } from 'react';
import { Link } from 'react-router-dom';

//STYLES FROM STYLED-COMPONENTS
import { Container, FormContainer } from './style';

export default function Login() {

    const [showRegister, setShowRegister] = useState(false);

    return (
        <Container>
            <FormContainer>
                <h3>LOGIN</h3>
                <form>
                    <input type="email" name="user_email" id="user_email" placeholder="Digite seu Email" />
                    <input type="password" name="user_password" id="user_password" placeholder="Digite sua Senha" />
                    <button>Entrar</button>
                </form>
                <hr />
                <button onClick={() => setShowRegister(!showRegister)}>Ainda não tem conta? cadastre-se! É de graça</button>

                {
                    showRegister ?
                        <>
                            <form>
                                <input type="email" name="register_email" id="register_email" placeholder="Informe seu email" />
                                <input type="text" name="register_name" id="register_name" placeholder="Informe seu nome completo" />
                                <input type="text" name="register_phone" id="register_phone" placeholder="Informe seu telefone" />
                                <input type="password" name="register_password" id="register_password" placeholder="Informe a senha" />
                                <input type="password" name="repeat_password" id="repeat_password" placeholder="Repita a senha" />
                                <button>Cadastrar</button>
                            </form>
                        </>
                        : null
                }
                <hr />
                <div>
                    <Link to="/">Esqueceu a senha?</Link>
                    <br />
                    <Link to="/user">Página do Usuário</Link>
                </div>
            </FormContainer>

        </Container>
    )
}