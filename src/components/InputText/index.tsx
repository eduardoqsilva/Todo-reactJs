import { KeyboardEvent } from "react";
import { InputTextStyled } from "./InputText.styled";


interface InputTextType {
  handleSetTasksValue: ({}) => void
}

export function InputText({ handleSetTasksValue }:InputTextType) {
  
  function handleSetText(e: KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      
      const text:string = e.currentTarget.value

      handleSetTasksValue({
        id: 1,
        text: text,
      })
    }
  }

  return (
      <InputTextStyled type='text' onKeyDown={handleSetText}/>
  )
}