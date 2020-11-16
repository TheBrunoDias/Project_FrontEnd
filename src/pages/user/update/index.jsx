import { Link } from 'react-router-dom';
import { Container, FormContainer, Informations } from './style';

//ICONS
import { FiMail, FiUser, FiSmartphone, FiBriefcase } from 'react-icons/fi';


export default function UpdateUser() {
  return (
    <Container>
      <form action="/user">
        <h1>Atualização de Cadastro</h1>

        <FormContainer>
          <label htmlFor="update_email"><FiMail /> Email</label>
          <input type="email" name="update_email" id="update_email" placeholder="Email" />
        </FormContainer>

        <FormContainer>
          <label htmlFor="update_name"> <FiUser /> Nome Completo</label>
          <input type="text" name="update_name" id="update_name" placeholder="Nome Completo" />
        </FormContainer>

        <FormContainer>
          <label htmlFor="update_name"> <FiSmartphone /> (DDD) Telefone</label>
          <input type="text" name="update_name" id="update_name" placeholder="Nome Completo" />
        </FormContainer>

        <FormContainer>
          <label htmlFor="update_name"> <FiBriefcase /> Profissão</label>
          <input type="text" name="update_name" id="update_name" placeholder="Nome Completo" />
        </FormContainer>

        <FormContainer>
          <label htmlFor="update_description">Descrição</label>
          <textarea name="update_description" id="update_description" cols="30" rows="10"></textarea>
        </FormContainer>

        <FormContainer>
          <label htmlFor="update_image"> Foto de Perfil</label>
          <input type="file" name="update_image" id="update_image" />
        </FormContainer>

        <FormContainer>
          <button type="submit">Atualiar Dados</button>
        </FormContainer>
      </form>
      <Informations>
        <h1>LEMBRE-SE</h1>
        <p>Nunca informe dados pessoas ou dados bancarios</p>
        <p>Esse blog foi desenvolvido por academicos de Engenharia de Software e Análise e desenvolvimento de Sistemas em parceria com acadêmicos de Pedagogia</p>
        <p>Somos totalmente sem fins lucrativos e estamos apenas tentando tornar o mundo um lugar melhor</p>
        <br />
        <p>Alguma Dúvida? <h3><Link to="/">Entre Em Contato</Link></h3></p>
      </Informations>
    </Container>
  );
}