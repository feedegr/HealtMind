import React from 'react'

import { Switch, Route, Redirect,

} from 'react-router-dom'
import {NavBar} from '../components/NavBar'
import { Inicio } from '../components/Inicio'
import { CentrosAyuda } from '../components/CentrosAyuda'
import { Quiz } from '../components/Quiz'

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar/>

        <div>
            <Switch>
                <Route exact path='/inicio' component={ Inicio } />
                <Route exact path='/quiz' component={ Quiz } />
                <Route exact path='/centros' component={ CentrosAyuda } />
                <Redirect to='/inicio'/>
            </Switch>
        </div>

    </>
  )
}
