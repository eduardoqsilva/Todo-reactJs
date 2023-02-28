import styled from "styled-components";

interface EmptyType {
  tasks: number
}

export const EmptyContainerStyled = styled.div<EmptyType>`
  width: 100%;
  
  flex-grow: 1;

  display: ${(props) => props.tasks > 0 ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & .text {
    max-width: 230px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
    text-align: center;
  }
`