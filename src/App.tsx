import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

import { darkTheme } from "./styles/themes/dark"
import { lightTheme } from "./styles/themes/light"

import background from "/background/background.jpg"


function App() {

  const [theme, setTheme] = useState(true)
  
  function handleSetToggleTheme() {
    setTheme((current) => !current)
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
       <Background imgUrl={background} theme={theme}>
        <Main>
          <Header handleSetToggleTheme={handleSetToggleTheme} theme={theme}/>
        </Main>
      </Background>
    </ThemeProvider>
  )
}

export default App
