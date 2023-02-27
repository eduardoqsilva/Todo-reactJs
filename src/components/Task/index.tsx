import { useEffect, useState } from "react";
import { CheckStyled, TaskStyled, TaskButtomDeleteStyled } from "./Task.styled";

interface TaskType {
  id: number
  text: string,
  completed: boolean
  
  handleSetCompleted: (id:number) => void
  handleDeletetask: (id:number) => void
}

export function Task({ id, text, completed, handleSetCompleted, handleDeletetask }:TaskType) {

  const [check, setCheck] = useState(false)
 
  useEffect(() => {
    setCheck(completed)
  },[])

  function handleSetCheck() {
    setCheck((prev) => !prev)
    handleSetCompleted(id)
  }
  function handleDeleteItem() {
    console.log('apagou')
    handleDeletetask(id)
  }
  

  return (
    <TaskStyled completed={check}>
      <CheckStyled type='checkbox' checked={check} onChange={handleSetCheck}/>
      <p>{text}</p>
      <TaskButtomDeleteStyled onClick={handleDeleteItem}/>
    </TaskStyled>
  )
}