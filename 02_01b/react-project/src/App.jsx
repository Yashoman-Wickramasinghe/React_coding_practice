import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header(props){
  return(
    <header>
      <h1>{props.name}'s Plants</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}


function App() {

  return  (
    <div>
    <Header name="Pavi" year={new Date().getFullYear()}/>
    <main>
      <h2>We have different kinds of plants in our store.</h2>
    </main>
    </div>
  )

}

export default App
