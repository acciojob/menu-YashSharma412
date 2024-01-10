import React from "react";
const DishDisplay  = ({dishes})=>{
    return(
        <div className="dishes__container">
            {
                dishes.map((dish)=>(
                    <div className="dish__container" key={dish.id}>
                        <div className="dish__img-container">
                            {
                                console.log(dish.img)
                            }
                            <img src={`${dish.img}`} alt={`dish ${dish.id} img `} />
                        </div>
                        <div className="dish__body">
                            <h1>
                                <span>{dish.title}</span>
                                <span>$ {dish.price}</span>
                            </h1>
                            <hr />
                            <p>{dish.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DishDisplay