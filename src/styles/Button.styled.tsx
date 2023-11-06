import styled, { css } from "styled-components";
import { MyAnimation } from "./animations/animations";

type StyledBtnPropsType = {
  color?: string,
  fontSize?: string,
  btnType?: 'primary' | 'outlined'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  //background-color: #fb3f78;
  background-color: ${props => props.color || '#fb3f78'};
  padding: 10px 20px;
  color: snow;
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: bold;

  &:hover {
    background-color: #da3768;
  }

  //outlined

  ${props  => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      border-color: #4053cc;
      color: #4053cc;
    }
  `}

  //primary
  
  ${props  => props.btnType ===  'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;
  `}
  

`


export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #333333;

  &:hover  {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`