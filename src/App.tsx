import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer autoClose={1500} />
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
