import styled from "styled-components";

import moon from "../../assets/toggle/moon.svg"
import sun from "../../assets/toggle/sun.svg"


export const HeaderStyled = styled.header`
  width: 100%;
  padding: 4rem 0 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: crimson; */

  > h1 {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1rem;
    text-transform: uppercase;
  }
 
`

interface ButtonType {
  buttonValue: boolean
}

export const ButtonThemeStyled = styled.button<ButtonType>`
  padding: 1.1rem;
  border: none;
  background: transparent;
  transition: all 0.2s ease-in;

  background-image: url(${(props) => props.buttonValue ? moon : sun});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* background: coral; */
  ${(props) => props.buttonValue ? `transform: rotate(360deg);` : 'transform: rotate(0deg);'}
`