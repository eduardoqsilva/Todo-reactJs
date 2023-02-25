import { KeyboardEvent, useState } from "react";
import { InputTextContainerStyled, InputTextStyled } from "./InputText.styled";


interface InputTextType {
  handleSetTasksValue: ({}) => void
  placeholder: string
}

export function InputText({ handleSetTasksValue, placeholder }:InputTextType) {
  
  const [alert, setAlert] = useState(false)

  function handleSetText(e: KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      const text:string = e.currentTarget.value.trim()
      
      if(text.length >= 3) {
        
        setAlert(false)
        handleSetTasksValue({
          id: 1,
          text: text,
        })
      }else {
        setAlert(true)
      }
    }
  }

  return (
    <InputTextContainerStyled>
       <InputTextStyled 
        type='text'
        onKeyDown={handleSetText}
        placeholder={placeholder}
        alert={alert}
      />
      <p className={alert ? 'alert' : ''}>
        O texto não pode ser vazio ou menor que 3 caracteres!
      </p>
    </InputTextContainerStyled>
     
  )
}