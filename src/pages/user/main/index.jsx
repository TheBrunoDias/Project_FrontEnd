import Header from "../../../components/header";
import {
  Container,
  UserContainer,
  UserInformations,
  Divider,
  UserPost,
  PostsContainer,
  Input,
  NewPostArea
} from "./style";

import { FiSettings, FiMail, FiSmartphone, FiUser, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";

const Img =
  "https://avatars3.githubusercontent.com/u/68758215?s=460&u=e996ee6ea0fdc629a90e2eb69d389b5cca9f362e&v=4";

export default function userPage() {
  return (
    <Container>
      <Header title="Bem Vindo" subtitle="Página do Usuário" />

      <UserContainer>
        <img src={Img} alt="User" />
        <UserInformations>
          <div>
            <h3>Bruno Sousa Dias</h3>
            <Link to="/user/update">
              <FiSettings />
            </Link>
          </div>
          <strong><FiUser /> Informações: </strong>
          <p>
            <FiMail /> : teste@teste.com
          </p>
          <p>
            <FiSmartphone /> : (45) 9999999
          </p>
          <p>
            <FiBriefcase /> : Estudante
          </p>
        </UserInformations>
      </UserContainer>
      <Divider></Divider>
      <NewPostArea>
        <h1>Suas postagens</h1>
        <Link to="/user/create">Nova Postagem</Link>
      </NewPostArea>
      <Input type="text" placeholder="procurar postagem" />
      <PostsContainer>
        <UserPost>
          <img src={Img} alt="postagem" />
          <h4>Titulo da postagem</h4>
          <p>Data da postagem</p>
        </UserPost>
      </PostsContainer>
    </Container>
  );
}
