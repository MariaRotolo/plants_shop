import style from "./Index.module.scss";
import heroimage from "../../images/heroimage.png";

const Hero = () => {

    return (
    <div className={style.hero}>
        <div className={style.article}>
            <h2 >Questo è il primo h2</h2>
            <h2 > questo è il secondo h2</h2>
        </div>
        <div className={style.hero_image}>
            <img src={heroimage} alt="plants" width="500px" ></img>
        </div>
    </div>

    )
}


export default Hero;