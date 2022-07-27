
import style from "./Index.module.scss";

const Header = () => {
    return (
        <div className={style.header} >
            <h1> PLANTS</h1>
            <div className={style.nav} >
                <div className={style.chart}>
                    <button className={style.buttonChart}>
                        <span> 0 </span>
                    </button>
                </div>
                <div className={style.open_chart}>
                    <div className={style.open_chart_span_div}>
                        <span> Il carrello è vuoto </span>
                    </div>
                    <button className={style.button_checkout_open_chart}>
                        <a href="/checkout"> Checkout </a>
                    </button>
                </div>
                <button className={style.logout_button_nav}> Logout </button>
            </div>
        </div>
    )
}

export default Header;