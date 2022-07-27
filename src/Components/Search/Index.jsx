

import style from "../Search/Index.module.scss";

const Searchbar = ({authorInput, handleAuthorInput}) => {


    
    return (
        
        <div className={style.search_div}>
                      <label htmlFor="search" className={style.label_search}> Cerca </label>
                      <input id="searchInput" placeholder={""}  autoComplete="off"  className={style.input_search} value={authorInput} onChange={handleAuthorInput} />
          </div> 
    )
}

export default Searchbar; 