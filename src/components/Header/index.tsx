import { ButtonThemeStyled, HeaderStyled } from "./Header.styled"
import { useState } from "react"



interface HeaderType {
  theme: boolean
  handleSetToggleTheme: () => void
}


export function Header({ theme, handleSetToggleTheme }:HeaderType) {
  
  return(
    <HeaderStyled>
      <h1>todo</h1>
      <ButtonThemeStyled 
        buttonValue={theme}
        onClick={handleSetToggleTheme}
      />
    </HeaderStyled>
  )
}