import { useState } from "react";
import "./style.scss";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [line, setLine] = useState('menu__list-link-active');

    return (
        <nav className="menu">
            <button className="burger-btn" onClick={() => setMenu(!menu)}>
                {menu ? <img className="burger-btn-close" src="./images/close-menu.svg"></img> : <img className="burger-btn-img" src="./images/burger.svg"></img>}
            </button>
            <ul className={menu ? "menu__list menu__list-active" : "menu__list"}>
                <li className="menu__list-item">
                    <a className="menu__list-link menu__list-link-active" href="#">
                        Главная
                    </a>
                </li>
                <li className="menu__list-item">
                    <a className="menu__list-link" href="#cooperation">
                        Почему именно мы?
                    </a>
                </li>
                <li className="menu__list-item">
                    <a className="menu__list-link" href="#footer">
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;