import {useStateValue} from "../utils/Provider";
import { createContext, useState } from "react";
import "./Home.module.scss";

import Header from "../Components/Header/Index";
import Hero from "../Components/Hero/Index";

import { Plants } from "../utils/piante";

import Footer from "../Components/Footer/Index";
import Card from "../Components/Card/Index";
import Searchbar from "../Components/Search/Index";
import SelectForm from "../Components/SelectForm/Index";

export const Context = createContext({ value: "", setValue: () => {} });

const Home = ({addToCart}) => {

  const [authorInput, setAuthorInput] = useState("");
  const handleAuthorInput = (e) => setAuthorInput(e.target.value);

  const [authorSelect, setAuthorSelect] = useState("");
  const handleAuthorSelect = (e) => setAuthorSelect(e.target.value);
  


  ///////////////////////////////////
  
  const [value, setValue] = useState("");

  /////////////////////////////

if (authorSelect === "indoor") {
    return (
      <div className="container">
        
        
          <Header/>
          <Hero/>
          <form>
            <Searchbar authorInput={authorInput} handleAuthorInput={handleAuthorInput} />
            <SelectForm authorSelect={authorSelect} handleAuthorSelect={handleAuthorSelect} />
            
          </form> 
          <section> 
              {Plants.filter(plant => plant.plantType.includes("indoor") ).map((plant) => (
                <Card key={plant.id} name={plant.name} image={plant.image} price={plant.price} id={plant.id} plantType={plant.plantType} onClick={addToCart} />
              ))}
             
          </section>
          <Footer/>
  
      </div>
    )
  } else if (authorSelect === "outdoor") {
        return (
          <div className="container">
            
              <Header/>
              <Hero/>
              <form>
                <Searchbar authorInput={authorInput} handleAuthorInput={handleAuthorInput} />
                <SelectForm authorSelect={authorSelect} handleAuthorSelect={handleAuthorSelect} />
                
              </form> 
              <section> 
                  {Plants.filter(plant => plant.plantType.includes("outdoor") ).map((plant) => (
                    <Card key={plant.id} name={plant.name} image={plant.image} price={plant.price} id={plant.id} plantType={plant.plantType} />
                  ))}
              </section>
              <Footer/>
  
          </div>
        )
  } else
  
    return (
        <>
          <div className="container">
            <Context.Provider value={{ value, setValue }}>
              <Header/>
              <Hero/>
              <form>
                <Searchbar authorInput={authorInput} handleAuthorInput={handleAuthorInput} />
                <SelectForm authorSelect={authorSelect} handleAuthorSelect={handleAuthorSelect} />
                
              </form>
              
              <section>
  
              
              
                {Plants.filter(plant => plant.name.toLowerCase().includes(authorInput.toLowerCase()) || authorInput === "").map((plant) => (
                  <Card key={plant.id} name={plant.name} image={plant.image} price={plant.price} id={plant.id} plantType={plant.plantType} />
                ))}
  
                
  
                
              </section>
              <Footer/>
  
              </Context.Provider> 
  
          </div>
        </>
        );
  }
  
  export default Home;