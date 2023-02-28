import { EmptyContainerStyled } from "./Empty.styled"

import iconList from "../../assets/empty/iconList.svg"

interface Emptytype {
  tasksNumber: number
}

export function Empty( {tasksNumber}:Emptytype) {
  return (
    <EmptyContainerStyled tasks={tasksNumber}>
      <img className="listIcon" src={iconList} alt="lista de itens" />
      <p className="text">Adicione ao menos 1 item a sua lista para que ele apareça aqui!</p>
    </EmptyContainerStyled>
  )
}