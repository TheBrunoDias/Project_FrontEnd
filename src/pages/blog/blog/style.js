import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
`;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5vw;

  section {
    width: 50vw;
  }
`;

const SectionTitle = styled.h3`
  width: 100%;
  color: ${props => props.theme.colors.text_featured};
  background-color: ${props => props.theme.colors.background_featured};
  padding: 10px;
`;

const CardContainer = styled.div`
  margin-top: 2vh;
  padding: 0 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, HomeContainer, SectionTitle, CardContainer };
