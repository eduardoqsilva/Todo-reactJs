import { ReactNode } from "react";
import {MainContainerStyled } from "./Main.styled";

interface MainType {
  children: ReactNode
}

export function Main({ children }:MainType) {
  return (
    <MainContainerStyled>
      {children}
    </MainContainerStyled>
  )
}