//IMAGES
import ImgBlog from '../../../assets/images/image.png';

//STYLES
import { Container, BlogImg, Title, AuthorArea, SubTitle, TextContainer, BlogArea } from './style';

//COMPONENTS
import AsideBlog from '../../../components/aside';
import Header from "../../../components/header";

export default function BlogSingle() {
  return (
    <>
      <Header title="Single Page Blog" subtitle="Is this a Lorem Ipsum?" />
      <Container>
        <BlogArea>
          <BlogImg src={ImgBlog} alt="single picture about anything" />
          <AuthorArea>
            <Title>Is this a Lorem Ipsum?</Title>
            <div>
              <p>by: Bruno Dias</p>
              <p>Data: 30/10/2020</p>
            </div>
          </AuthorArea>
          <SubTitle>Yessss, this is definitely a Lorem Ipsum!!</SubTitle>
          <TextContainer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni atque eligendi qui explicabo dolorum enim! Modi veritatis veniam sapiente consequatur sit maiores assumenda qui quas eveniet! Incidunt, nesciunt quis.
                    </TextContainer>
        </BlogArea>
        <AsideBlog />
      </Container>
    </>
  );
};
