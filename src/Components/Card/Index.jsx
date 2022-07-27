
import { useEffect, useState, useContext } from "react";
import { Context } from "../../Pages/Home";
import style from "./Index.module.scss";
import CartButton from "../CartButton/Index";
import { useStateValue } from "../../utils/Provider";






const Card = ({ id, name, price, image, }) => {


  const [product, setProduct] = useState([]);
  const [{ user, basket }, dispatch] = useStateValue();
  const { value } = useContext(Context);
   
    const addToCart = (plant) => {
        dispatch({
          type: "AGGIUNGI-CARRELLO",
          oggetto: {
            id: id,
            name: name,
            image: image,
            price: price,
            
          },
        });
      };
    
        

    return (
        <>
            <div className={style.card} key={id}>

               
                    
                
                <h3 className={style.plant_title}> {name}  <span> {price} € </span> </h3>
                <img src={image} className={style.card_image} />
                
                <CartButton onClick={addToCart} />
                    
                
                
            </div>
         </>
    )
};

export default Card; 
