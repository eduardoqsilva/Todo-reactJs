import styled from "styled-components";


interface InputTextStyledType {
  alert: boolean
}

export const InputTextStyled = styled.input<InputTextStyledType>`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.inputColor};
  
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};

  outline: none;
  ${(props) => props.alert ? `box-shadow: 0 0 0 2px ${ props.theme.alertColor};` : ''}

  ::placeholder {
    color: ${(props) => props.theme.placeholderColor}
  }
  @media(max-width: 600px) {
    font-size: 1rem;
  }
`

export const InputTextContainerStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  & p {
    display: none;
  }
  & p.alert {
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    color: ${(props) => props.theme.alertColor};

    text-align: left;
    margin-top: 0.5rem;
    margin-left: 0.1rem;
  }
`