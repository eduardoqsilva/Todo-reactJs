import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { InputText } from "./components/InputText"
import { Main } from "./components/Main"
import { Task } from "./components/Task"

import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"

import background from "/background/background.jpg"

export type  objectType = {
  id: number
  text: string
  completed: boolean
}
function App() {

  const [theme, setTheme] = useState(true)
  const [tasks, setTasksValue] = useState<objectType[]>([])
  
  function handleSetToggleTheme() {
    setTheme((current) => !current)
  }
  function handleSetTasksValue(value:objectType) {
    setTasksValue((prevTasks) => {
      return [...prevTasks, value];
    })
  }
  function setIndexId() {
    return (tasks.length)
  }
  function handleSetCompleted(id:number) {
    const tasksUpdate = tasks
    tasksUpdate.map((i) => {
      i.id === id ? i.completed = !i.completed : i.completed
    })
    setTasksValue(tasksUpdate)
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
       <Background imgUrl={background} theme={theme}>
        <Main>
          <>
            <Header handleSetToggleTheme={handleSetToggleTheme} theme={theme}/>
            <InputText setIndexId={setIndexId} maxLength={25} handleSetTasksValue={handleSetTasksValue} placeholder="Crie uma nova tarefa!"/>
            {
              tasks.map((i) => {
                return (
                  <Task 
                    key={i.id}
                    id={i.id}
                    completed={i.completed}
                    text={i.text}
                    handleSetCompleted={handleSetCompleted}
                  />
                )
              })
            }
            {useEffect(() => {
              console.log(tasks)
            },[tasks])}
          </>
        </Main>
      </Background>
    </ThemeProvider>
  )
}

export default App
