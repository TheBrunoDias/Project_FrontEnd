import { Container, InputContainer } from './style';

//img, title, description, author, date
export default function NewPost() {
  return (
    <Container>
      <h1>Nova Postagem</h1>
      <form action="/user">
        <InputContainer>
          <label htmlFor="new-title">Titulo</label>
          <input type="text" name="new-title" id="new-title" placeholder="Insira o titulo" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="new-subtitle">Subtitulo</label>
          <input type="text" name="new-subtitle" id="new-subtitle" placeholder="Insira o subtitulo" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="new-image">Imagem</label>
          <input type="file" name="new-image" id="new-image" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="new-category">Categoria</label>
          <input type="text" name="new-category" id="new-category" placeholder="Insira a categoria" />
        </InputContainer>

        <textarea name="new-post" id="new-post" cols="100" rows="30" placeholder="Insira o texto aqui"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}