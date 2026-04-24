import React from 'react'
import { HashRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

import './App.scss'
export const App: React.FC = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}
