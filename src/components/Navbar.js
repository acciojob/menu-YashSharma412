import React from "react";
import dishesData from "../data/dishesData";
const Navbar = ({dishes, setDishes}) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={()=>setDishes(dishesData)}>All</li>
        <li id="filter-btn-1" onClick={()=>setDishes(dishesData.filter((dish)=>dish.category === "breakfast"))}>Breakfast</li>
        <li id="filter-btn-2" onClick={()=>setDishes(dishesData.filter((dish)=>dish.category === "lunch"))}>Lunch</li>
        <li id="filter-btn-3" onClick={()=>setDishes(dishesData.filter((dish)=>dish.category === "shakes"))}>Shakes</li>
      </ul>
    </nav>
  );
};

export default Navbar;
