import React from "react";
// import item_1 from "../images/item_1.jpg";

const DishDisplay = ({ dishes }) => {
  return (
    <div className="dishes__container">
      {
          dishes.map((dish) => (
            <div className="dish__container" key={dish.id}>

              <div className="dish__img-container">
                <img src={dish.img} alt={`dish ${dish.id} img`} />
              </div>

              <div className="dish__body">
                <h1 style={{display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                  <span>{dish.title}</span>
                  <span className="price">$ {dish.price}</span>
                </h1> <hr />
                <p>{dish.desc}</p>
              </div>

            </div>
          ))
      }
    </div>
  );
};

export default DishDisplay;
