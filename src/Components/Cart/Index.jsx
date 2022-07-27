

import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import style from "./Index.module.scss"; 
import Footer from "../Footer/Index";
import { useStateValue} from "../../utils/Provider";



const Cart = ({ id, name, image, price, count }) => {
    


    const [{ basket }, dispatch] = useStateValue();
    const selectId = "numItems_" + id;
  
    const deleteFromCart = () => {
      dispatch({
        type: "RIMUOVI-CARRELLO",
        oggetto: {
          id,
          name,
          image,
          price,
          count,
        },
      });
    };
  
    const cambiaQty = () => {
      let select = document.querySelector(`#${selectId}`);
      let numItems = parseInt(select.options[select.selectedIndex].value);
  
      dispatch({
        type: "COUNTER-CARRELLO",
        oggetto: {
            id,
            name,
            image,
            price,
            count,
        },
      });
    };
  
    useEffect(() => {
      const select = document.querySelector(`#${selectId}`);
      const selectOptions = select.options;
      for (let i = 0; i < selectOptions.length; i++) {
        if (selectOptions[i].value === count) {
          select.selectedIndex = i;
          break;
        }
      }
    });
  

   

    return (
        <div className={style.cart}>
            <div className={style.cart_main}>
                <div className={style.sidebar}>
                    <div className={style.head_container}>
                            <Link to="/"> <h1> PLANTS </h1> </Link> 
                            <button className={style.logout_button_nav}> Logout </button>
                    </div>
                </div>
                <div className={style.cart__main}>
                    <h3> Il tuo carrello</h3>
                    <div className={style.products_container}>
                        <div className={style.card_product} key={id}>
                            <h3 className={style.plant_title}> {name}  <span> {price} € </span> </h3>
                            <img src={image} className={style.card_image} />
                            <div className={style.counter}>
                                <select onChange={cambiaQty} id={selectId}>
                                    <option value={count} defaultValue={count} hidden>{count}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <button className={style.remove_btn} onClick={deleteFromCart}>
                                Rimuovi dal carrello
                            </button>
                        </div>
                    </div>
                 
                </div>

               
            </div>       
            <Footer/>
        </div>
        
    )

};
export default Cart;