import styled from "styled-components";

export const InputTextStyled = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.inputColor};
  
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};

  outline: none;
`