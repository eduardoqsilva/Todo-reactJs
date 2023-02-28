import styled from "styled-components";

interface StatusType {
  tasksCompleted: number
  tasksNumber: number
}

export const StatusContainerStyled = styled.div<StatusType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  > span {
    font-size: 1rem;
    color: lightgreen;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  & .tasksNumber {
    ::after {
      content: "${props => props.tasksNumber}";
      display: inline-block;
      background: ${(props) => props.theme.placeholderColor};
      background: ${(props) => props.theme.placeholderColor};
      padding: 0.3rem 0.6rem;
      border-radius: 20px;
      margin-left: 0.8rem;
    }
  }
  & .tasksCompleted {
    ::after {
      content: "${props => props.tasksCompleted} / ${(props) => props.tasksNumber}";
      display: inline-block;
      background: ${(props) => props.theme.placeholderColor};
      padding: 0.3rem;
      border-radius: 20px;
      margin-left: 0.8rem;
    }
  }
`