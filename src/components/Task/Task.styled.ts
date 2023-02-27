import styled from "styled-components";

import iconCheck from "../../assets/check/check.svg"
import iconDelete from "../../assets/delete/delete.svg"
import iconDelete2 from "../../assets/delete/delete2.svg"

interface TaskStyledType {
  completed: boolean
}

export const TaskStyled = styled.div<TaskStyledType>`
  width: 100%;
  max-height: 60px;
  min-height: 60px;
  padding: 0.8rem;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.inputColor};
  border-radius: 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 1rem;

  & > p {
    flex-grow: 1;
    ${(props) => props.completed 
      ? 
      `text-decoration: line-through;
      opacity: 0.8;`
      : '' 
    }
  }
`
export const CheckStyled = styled.input`
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.placeholderColor};
  border-radius: 50%;
  margin-right: 1rem;

  position: relative;

  :checked {
    border: 2px solid ${(props) => props.theme.borderColor};
    ::before {
      content: '';
      
      width: 100%;
      height: 100%;
      
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: -5px;
      
      border-radius: 50%;
      background-color: #1da1f2;
      background-image: url(${iconCheck});
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`

export const TaskButtomDeleteStyled =  styled.button`
  background: transparent;
  border: none;
  padding: 0.8rem;
  margin-left: 1rem;

  background-image: url(${iconDelete});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.1s ease-in-out;

  :hover {
    background-image: url(${iconDelete2});
    transform: scale(1.02);
  }
  :active {
    background-image: url(${iconDelete2});
    transform: scale(0.90);
  }
`