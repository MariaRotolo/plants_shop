

const SelectForm = ()=> {


    return(

        <div className={style.type_div} >
            <label className={style.label_type}> Tipologia </label>
            <select  name="type" className={style.input_select}>
                <option value="all" className={style.slect_option}> Tutte </option> 
                <option value="indoor" className={style.slect_option}> Interno </option> 
                <option value="outdoor" className={style.slect_option}> Esterno </option> 
            </select>
        </div>  
    )
}

export default SelectForm;


if(option.value === "all") {
    <Card/>
  } else if(option.value === "indoor") {
    {Plants.filter(plant => plant.plantType.value === "indoor") .map((plant) => (
      <Card key={plant.id} name={plant.name} image={plant.image} price={plant.price} id={plant.id} plantType={plant.plantType} />
    ))}
  }
//////////////////////////////////////////////////////////////////////////////

<Route path="/carrello" element={<Cart/>} />