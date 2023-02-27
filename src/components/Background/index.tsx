import { ReactNode } from "react";
import { BackgroundStyled } from "./Background.styled";

interface BackgroundType {
  children: ReactNode
  theme: boolean
}
export function Background({ children, theme }:BackgroundType) {
  return (
    <BackgroundStyled thems={theme}>
      {children}
    </BackgroundStyled>
  )
}