import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { InputText } from "./components/InputText"
import { Main } from "./components/Main"
import { Task } from "./components/Task"

import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"


export type  objectType = {
  id: number
  text: string
  completed: boolean
}
function App() {

  const [theme, setTheme] = useState(true)
  const [tasks, setTasksValue] = useState<objectType[]>([])

  useEffect(() => {
    const valueTasks = localStorage.getItem('tasks')
    const savedTasks = valueTasks ? JSON.parse(valueTasks): ''
    savedTasks !== '' ? setTasksValue(savedTasks) : setTasksValue(tasks)

    if(localStorage.getItem('darkMode') !== null){
      localStorage.getItem('darkMode') === 'true' ? setTheme(true) : setTheme(false) 
    }
  }, [])

  useEffect(() => {
    const value = theme ? 'true' : 'false'
    localStorage.setItem('darkMode', value)
  }, [theme])
  
  function setIndexId() {
    return (tasks.length)
  }
  function handleSetToggleTheme() {
    setTheme((current) => !current)
  }
  function handleAddTasksValue(value:objectType) {
    setTasksValue((prevTasks) => {
      return [...prevTasks, value];
    })
    
  }
  function handleSetCompleted(id:number) {
    const tasksUpdated = tasks
    tasksUpdated.map((i) => {
      i.id === id ? i.completed = !i.completed : i.completed
    })
    setTasksValue(tasksUpdated)
    localStorageSave('tasks', JSON.stringify(tasksUpdated))
  }
  function handleDeleteTask(id:number) {
    const tasksUpdated = tasks
    .filter((i) =>{
      return i.id !== id
    }).map((i, index) => {
      i.id = index
      return i
    })
    setTasksValue(tasksUpdated)
    localStorageSave('tasks', JSON.stringify(tasksUpdated))
  }
  function localStorageSave(key:string, value:string) {
    localStorage.setItem(key, value)
  }

  useEffect(() => {
    console.log(tasks)
    localStorageSave('tasks', JSON.stringify(tasks))
  },[tasks])

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
       <Background theme={theme}>
        <Main>
          <>
            <Header handleSetToggleTheme={handleSetToggleTheme} theme={theme}/>
            <InputText setIndexId={setIndexId} maxLength={25} handleSetTasksValue={handleAddTasksValue} placeholder="Crie uma nova tarefa!"/>
            {
              tasks.map((i) => {
                return (
                  <Task 
                    key={i.id}
                    id={i.id}
                    completed={i.completed}
                    text={i.text}
                    
                    handleSetCompleted={handleSetCompleted}
                    handleDeletetask={handleDeleteTask}
                  />
                )
              })
            }
          </>
        </Main>
      </Background>
    </ThemeProvider>
  )
}

export default App
