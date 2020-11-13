import styled from 'styled-components';

const AsideArea = styled.aside`
  color: ${props => props.theme.colors.text_featured};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  right: 10vw;
  width: 30vw;

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    margin: 2vh 0;

    input {
      width: 80%;
      height: 4vh;
      padding: 10px;
      font-style: italic;
      border: 1px solid ${props => props.theme.colors.text_featured};
    }
    button {
      width: 18%;
      border: 1px solid ${props => props.theme.colors.text_featured};
    }
  }
`;

const SectionTitle = styled.h3`
  width: 100%;
  color: ${props => props.theme.colors.text_featured};
  background-color: ${props => props.theme.colors.background_featured};
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.text_featured};
`;

const Categories = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  li {
    display: inline-block;
    padding: 10px 0;
    transition: 0.5s;
    position: relative;
    :hover {
      transform: translate(5%, -5%);
    }
  }

  li::before {
    position: absolute;
    transition: 0.5s;
    content: '';
    height: 1%;
    width: 0;
    bottom: 0;
    right: 0;
  }

  li:hover::before {
    background: ${props => props.theme.colors.text_featured};
    width: 100%;
    left: 0;
  }
`;
export { SectionTitle, AsideArea, Categories };
