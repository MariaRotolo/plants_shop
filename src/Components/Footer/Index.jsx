import style from "./Index.module.scss";



const Footer = () => {

        return(

       
    <div className={style.footer}>
        <div className={style.info}>
            <span> Contatti </span>
            <span> Newsletter </span>
            <span> Blog </span>
            <span> Spedizioni </span>
        </div>
        <div className={style.copyright}>
            
            <span> Copyright: Maria Rotolo </span>
            
            
        </div>
        <div className={style.indirizzi}>
            <h4> PIANTE SHOP SPA </h4>
            <span> Via: Lorem Ipsum, 106, Palermo </span>
            <h5> Email  pianteshop@gmail.com  </h5>
            
        </div>
    </div>

)
}

export default Footer; 