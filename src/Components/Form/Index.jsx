

import Searchbar from '../Search/Index';
import style from "./Index.module.scss";


const Form = () => {
 
    
    

    return (
        <div>
            <form className={style.form}>
              <Searchbar />  
                <div className={style.type_div} >
                    <label className={style.label_type}> Tipologia </label>
                    <select aria-label="input select" name="type" className={style.input_select}>
                        <option value="all" className={style.slect_option}> Tutte </option> 
                        <option value="home" className={style.slect_option}> Interno </option> 
                        <option value="outdoor" className={style.slect_option}> Esterno </option> 
                    </select>
                </div>  
                <div data-testid="range" className={style.range_div}>
                    <label htmlFor="range" className={style.label_range}> Prezzo</label>
                    <input data-testid="rangeInput" aria-label="price range" name="price" type="range" min="4" max="300" className={style.input_range} value />
                </div>            
            </form>
        </div>
    )
}

export default Form;