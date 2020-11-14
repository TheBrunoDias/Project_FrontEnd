import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.55;
  }
`;

export default StyledLink;
