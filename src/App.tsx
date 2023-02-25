import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { InputText } from "./components/InputText"
import { Main } from "./components/Main"

import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"

import background from "/background/background.jpg"


function App() {

  const [theme, setTheme] = useState(true)
  const [tasks, setTasksValue] = useState<object[]>([])
  
  function handleSetToggleTheme() {
    setTheme((current) => !current)
  }
  function handleSetTasksValue(value:object) {
    setTasksValue((prevTasks) => {
      return [...prevTasks, value];
    })
  }
  function setIndexId() {
    return (tasks.length)
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
       <Background imgUrl={background} theme={theme}>
        <Main>
          <>
          <Header handleSetToggleTheme={handleSetToggleTheme} theme={theme}/>
          <InputText setIndexId={setIndexId} maxLength={25} handleSetTasksValue={handleSetTasksValue} placeholder="Crie uma nova tarefa!"/>
          {console.log(tasks)}
          </>
        </Main>
      </Background>
    </ThemeProvider>
  )
}

export default App
