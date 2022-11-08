import Navbar from "./Navbar/Navbar";
import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="logo" href="#">
                        <img className="logo__img" src="./images/logo.svg" alt="Logotip" />
                    </a>
                    <Navbar />
                    <a className="header__btn btn" href="#banner">Заказать</a>
                </div>
            </div>
        </header>
    )
}


export default Header;