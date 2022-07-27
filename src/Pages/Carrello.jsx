

import { useStateValue } from "../utils/Provider";
import Cart from "../Components/Cart/Index";
import style from "../Pages/Carrello.module.scss";
import Subtotal from "../Components/Subtotal/Index";

const Carrello = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
     
      
        
          <div className={style.cartPage_wrap}>
            {basket?.length === 0 ? (
             <h2>Il tuo carrello è vuoto</h2>
                ) : (
              <div>
                <h2 className={style.yourCart}>Il tuo carrello</h2>
                {basket?.map((item) => (
                  <Cart
                    key={item.id}
                    id={item.id}
                    titolo={item.titolo}
                    image={item.image}
                    prezzo={item.prezzo}
                    rating={item.rating}
                    count={item.count}
                  />
                 
                ))}
                
              </div>
            )}
            {basket?.length > 0 && <Subtotal />}
            
          </div>
       

      
    </>
  );
};

export default Carrello;