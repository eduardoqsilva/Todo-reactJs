import { StatusContainerStyled } from "./Status.styled";

interface StatusType {
  tasksNumber: number
  tasksCompleted: number
}

export function Status({tasksNumber, tasksCompleted}:StatusType) {
  
  return (
    <StatusContainerStyled tasksNumber={tasksNumber} tasksCompleted={tasksCompleted}>
      <span className="tasksNumber">Tarefas Criadas</span>
      <span className="tasksCompleted">Concluídas</span>
    </StatusContainerStyled>
  )
}