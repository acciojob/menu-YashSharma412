import React, {useEffect, useState} from "react";
import "../styles/App.css"
import dishesData from "../data/dishesData"
// 
import Navbar from "./Navbar";
import DishDisplay from "./DishDisplay";
// 
const App = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(()=>{
    setDishes(dishesData)
  }, [])

  useEffect(()=>{
    console.log(dishes)
  },[dishes])

  return (
    <div className="app__container">
      <h1>Our Menu</h1>
      <hr className="heading__hr"/>
      <Navbar setDishes={setDishes}/>
      <DishDisplay dishes={dishes}/>
    </div>
  );
};

export default App;
