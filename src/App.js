import React from 'react'

import './styles/app.css'

import { Home } from './components/Home'
import { Recipes } from './components/Recipes'

export const App = () => {
  return (
    <main className={'main__grid'}>
      <Home/>
      <Recipes/>
    </main>
  )
}
