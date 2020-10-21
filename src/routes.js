import React from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"

import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>

      <GlobalStyle />
    </BrowserRouter>
  )
}

export default Routes;