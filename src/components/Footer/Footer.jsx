import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <h2 className="footer__title">Контакты</h2>
            <ul className="footer__social-list">
                <li className="footer__social-item">
                    <a className="footer__social-link" href="https://www.facebook.com/" target="_blank">
                        <img className="footer__social-icon" src="./images/social-icon/users.svg" alt="User" />
                    </a>
                </li>
                <li className="footer__social-item footer__social-item-big">
                    <a className="footer__social-link footer__social-link-big" href="https://www.behance.net/" target="_blank">
                        <img className="footer__social-icon" src="./images/social-icon/behance.svg" alt="Behance" />
                    </a>
                </li>
                <li className="footer__social-item footer__social-item-big">
                    <a className="footer__social-link footer__social-link-big" href="https://web.telegram.org/" target="_blank">
                        <img className="footer__social-icon" src="./images/social-icon/telegram.svg" alt="Telegram" />
                    </a>
                </li>
                <li className="footer__social-item footer__social-item-big">
                    <a className="footer__social-link footer__social-link-big" href="https://vk.com/" target="_blank">
                        <img className="footer__social-icon" src="./images/social-icon/vk.svg" alt="VK" />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a className="footer__social-link" href="https://www.google.com/" target="_blank">
                        <img className="footer__social-icon" src="./images/social-icon/mail.svg" alt="Mail" />
                    </a>
                </li>
            </ul>
            <div className="footer__copy">
                <p className="footer__copy-text">
                    © 2019–2022, WEB Studio - Разработка сайтов для предприятий
                </p>
                <a className="footer__copy-link" href="#">
                    Политика сайта и обработка персональных данных
                </a>
            </div>
        </footer>
    )
}

export default Footer;