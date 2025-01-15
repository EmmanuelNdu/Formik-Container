import React from 'react'
import './App.css'
import FormikContainer from './components/FormikContainer' 
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import EnrollmentForm from './components/EnrollmentForm'
import { Theme, ThemeProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <ThemeProvider>

      <EnrollmentForm/>
      
      </ThemeProvider>
    </>
  )
}

export default App
