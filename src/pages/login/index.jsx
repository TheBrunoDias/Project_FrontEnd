//STYLES FROM STYLED-COMPONENTS
import { Container, FormContainer } from './style';

//IMAGES
import Svg from '../../assets/images/loginBackground.svg';

export default function Login() {
  return (
    <Container>
      <FormContainer>
        <h3>LOGIN</h3>
        <input type="email" name="user_email" id="user_email" placeholder="Digite seu Email" />
        <input type="password" name="user_password" id="user_password" placeholder="Digite sua Senha" />
        <button>Entrar</button>
      </FormContainer>
      <img src={Svg} alt="" />

    </Container>
  )
}
