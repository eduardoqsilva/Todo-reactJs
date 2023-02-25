import { KeyboardEvent, ReactHTMLElement, useState } from "react";
import { InputTextContainerStyled, InputTextStyled } from "./InputText.styled";


interface InputTextType {
  handleSetTasksValue: ({}) => void
  setIndexId: () => number
  placeholder: string
  maxLength: number;
}

export function InputText({ handleSetTasksValue, setIndexId, placeholder, maxLength }:InputTextType) {
  
  const [alert, setAlert] = useState(false)
  const [textValue, setTextValue] = useState('')

  function handleSetObjectTask(e: KeyboardEvent<HTMLInputElement>) {
    
    if(e.key === 'Enter') {
      const text:string = textValue
      
      if(text.length >= 3) {
        
        setAlert(false)
        setTextValue('')
        handleSetTasksValue({
          id: setIndexId(),
          text: text,
          completed: false, 
        })
      }else {
        setAlert(true)
      }
    }
  }
  function handleSetText(e: React.FormEvent<HTMLInputElement>) {
    setTextValue(e.currentTarget.value)
  }

  return (
    <InputTextContainerStyled>
       <InputTextStyled 
        type='text'
        onKeyDown={handleSetObjectTask}
        onChange={handleSetText}
        placeholder={placeholder}
        alert={alert}
        maxLength={maxLength}
        value={textValue}
      />
      <p className={alert ? 'alert' : ''}>
        O texto não pode ser vazio ou menor que 3 caracteres!
      </p>
    </InputTextContainerStyled>
     
  )
}