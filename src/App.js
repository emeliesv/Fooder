import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/app.css'

import { Home } from './components/Home'
import { Recipes } from './components/Recipes'
import { CreateRecipe } from './components/CreateRecipe'
import { DetailPage } from './components/DetailPage'

export const App = () => {
  return (
    <BrowserRouter>
      <main className={'main__grid'}>
        <Switch>
          <Route path='/' exact>
            <Home />
            <Recipes />
          </Route>
          <Route path='/create' exact>
            <CreateRecipe/>
          </Route>
          <Route path='/details' exact>
            <DetailPage/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
