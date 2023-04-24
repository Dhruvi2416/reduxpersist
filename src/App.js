import React from 'react'
import SignUp from "./components/SignUp"
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' Component={SignUp}/>
      <Route exact path='/signup' Component={SignUp}/>
      <Route path='/home' Component={Home}/>
    </Routes>
    </BrowserRouter>
   
   
    
    </>
  )
}

export default App