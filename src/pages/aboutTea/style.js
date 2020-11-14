import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const Parallax = styled.div`
  margin: auto;
  max-width: 75vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

const ParallaxLeft = styled.div`
  position: absolute;
  height: 100vh;
  width: 60%;
  background-position: left;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: space-between;
  border-right: 200px solid
    ${(props) => props.theme.colors.background_secondary};
  border-top: 100vh solid transparent;
`;

const CoverLeft = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.background_secondary};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  flex-direction: column;
  height: 100vh;
  width: 40%;
  right: 1%;
  padding: 2%;
  color: white;

  div {
    width: 10%;
    height: 1%;
    background: ${(props) => props.theme.colors.secondary};
    margin: 20px 0;
  }
`;

const ParallaxRight = styled.div`
  height: 100vh;
  width: 60%;
  margin: 0 39%;
  position: absolute;
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: space-between;
  border-left: 200px solid ${(props) => props.theme.colors.background_secondary};
  border-top: 100vh solid transparent;
`;

const CoverRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.background_secondary};
  display: flex;
  padding: 2%;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  left: 0;
  color: white;

  div {
    width: 10%;
    height: 1%;
    background: ${(props) => props.theme.colors.secondary};
    margin: 20px 0;
  }
`;

const FullParallax = styled.div`
  margin: auto;
  position: relative;
  height: 100vh;
  width: 74vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CoverCenter = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 10%;
  top: 25%;
  left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
  height: 60%;
  color: white;

  div {
    width: 10%;
    height: 1%;
    background: white;
    margin: 20px 0;
  }

  h2 {
    color: white;
  }

  p {
    text-align: justify;
  }
`;

export {
  Container,
  ParallaxLeft,
  CoverLeft,
  ParallaxRight,
  CoverRight,
  FullParallax,
  CoverCenter,
  Parallax,
};
