import { useEffect, useState } from "react";
import { CheckStyled, TaskStyled } from "./Task.styled";

interface TaskType {
  id: number
  text: string,
  completed: boolean
  handleSetCompleted: (id:number) => void
}

export function Task({ id, text, completed, handleSetCompleted }:TaskType) {

  const [check, setCheck] = useState(false)

  function handleSetCheck() {
    setCheck((prev) => !prev)
    handleSetCompleted(id)
  }
  useEffect(() => {
    setCheck(completed)
  },[])

  return (
    <TaskStyled completed={check}>
      <CheckStyled type='checkbox' checked={check} onChange={handleSetCheck}/>
      <p>{text}</p>
    </TaskStyled>
  )
}