import React from 'react';
import './App.css'
import chef from "./images/chef.jpg"

function Header({ name, year}){
  return(
    <header>
      <h1>{ name }'s Kitchen</h1>
      <p>Copyright { year }</p>
    </header>
  );
}

const items = ["Macaroni and Cheese","Salmon with Potatoes","Tofu with Vegitables","Minestrone Soup"];

const dishObjects = items.map((dish, i)=>({
  id: i,
  title: dish
}));

console.log(dishObjects);

function Main({ dishes }){
  return (
  <>
  <div>
    <h2>Welcome to this beautiful resturant.</h2>
  </div>
  <main>
    <img 
    src={chef} height={200} 
    alt=" This is Maathulaala, our smiling chef owner. "/>
    
    <ul>
        {dishes.map((dish) => (
            <li key={dish.id} style={{listStyleType:"none"}}>{ dish.title }</li>
          ))}
    </ul>
  </main>
  </>
  );
}

function App() {
  return  (
    <div>
    <Header name="Mathupaala" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects}/>
    </div>
  )
}


export default App
