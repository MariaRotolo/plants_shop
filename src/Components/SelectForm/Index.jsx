

import style from "../SelectForm/Index.module.scss";



const SelectForm = ({authorSelect, handleAuthorSelect})=> {


    return(
       
            <div className={style.type_div} >
                <label className={style.label_type}> Tipologia </label>
                <select  name="type" className={style.input_select}  onChange={handleAuthorSelect} value={ authorSelect}>
                    
                        
                            <option value="all" className={style.slect_option}> Tutte</option> 
                            <option value="indoor" className={style.slect_option} > Interno </option> 
                            <option value="outdoor" className={style.slect_option} > Esterno </option> 
                        
                   
                
                </select>
            </div>  
       
    )
}

export default SelectForm;