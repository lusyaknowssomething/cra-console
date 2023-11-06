import styled from "styled-components";
import { MyAnimation } from "../styles/animations/animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #da3768;
  }

  &:last-child {
    background-color: #37dacf;
  }
`


export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #333333;

  &:hover  {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`