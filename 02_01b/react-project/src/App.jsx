import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header(){
  return(
    <header>
      <h1>Yasho's Plants</h1>
    </header>
  );
}


function App() {

  return  (
    <div>
    <Header />
    <main>
      <h2>We have different kinds of plants in our store.</h2>
    </main>
    </div>
  )

}

export default App
