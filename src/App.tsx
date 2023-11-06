import React from "react";
import Accordion from "./components/Accardion/Accordion";
import Rating from "./components/Rating/Rating";
import styled from "styled-components";
import { StyledBtn, SuperButton } from "./styles/Button.styled";
import { Link } from "./styles/Link.styled";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <>
    <Box>
      <PageTitle />
      Article 1
      <Rating value={1} />
      Article 2
      <Rating value={2} />
      Article 3
      <Rating value={5} />
      <Accordion title={'Menu'} collapsed={true} />
      <Accordion title={'Users'} collapsed={false} />
      <StyledBtn color={'green'} fontSize ={'20px'}>Button Green</StyledBtn>
      <StyledBtn>Button</StyledBtn>
      <StyledBtn as="a" href={"#"}>Link</StyledBtn>
      <SuperButton>Super Button</SuperButton>
      <StyledBtn as={Link}>Link Component</StyledBtn>
      <StyledBtn color={myTheme.colors.primary} btnType={'primary'}>Primary</StyledBtn>
      <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}>Outline</StyledBtn>
    </Box>
    </>
  );
}

function PageTitle() {
  return <h1>This is App component</h1>;
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    background-color: #ffcc96
  }
`