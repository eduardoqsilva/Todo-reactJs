import { ReactNode } from "react";
import { BackgroundStyled } from "./Background.styled";

interface BackgroundType {
  children: ReactNode
  imgUrl: string
  theme: boolean
}
export function Background({ children, imgUrl, theme }:BackgroundType) {
  return (
    <BackgroundStyled backgroundUrl={imgUrl} thems={theme}>
      {children}
    </BackgroundStyled>
  )
}