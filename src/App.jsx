import React from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import { theme, ThemeProvider } from '@chakra-ui/react'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <>
      <LoginForm/>
    </>
    </ThemeProvider>
  )
}

export default App
