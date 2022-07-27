import { useEffect, useState, useContext } from "react";
import { Context } from "../../Pages/Home";
import { useStateValue } from "../../utils/Provider";

import Card from "../Card/Index";
import cartimage from "../../images/cartimage.png";
import { Plants } from "../../utils/piante";
import style from "./Index.module.scss";

  
  
   
   
        
    


const CartButton = ({Plants}) => {
     

    const [{ user, basket }, dispatch] = useStateValue();
    const { value } = useContext(Context);
    const [product, setProduct] = useState([]);
    

    const addToCart = (plant) => {
        dispatch({
          type: "AGGIUNGI-CARRELLO",
          oggetto:
           
               <Card key={plant.id} name={plant.name} price={plant.price} image={plant.image} />
           ,

        
          })
        };

    return (
        <>
                <button className={style.button_icon} onClick={addToCart}>
                        <img src={cartimage} alt="cart icon" width="40px" height="40px" />
                </button>
           
         </>
    )
};

export default CartButton;