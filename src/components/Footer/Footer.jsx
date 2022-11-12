import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <h2 className="footer__title">
                <svg className="footer__animate footer__decor-start-left" width="59" height="62" viewBox="0 0 59 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30L11.1816 18.8184L0 15L11.1816 11.1816L15 0L18.8184 11.1816L30 15L18.8184 18.8184L15 30Z" fill="url(#paint0_radial_627_29)" />
                    <g opacity="0.5">
                        <path d="M51 62L48.9635 56.0365L43 54L48.9635 51.9635L51 46L53.0365 51.9635L59 54L53.0365 56.0365L51 62Z" fill="url(#paint1_radial_627_29)" />
                    </g>
                    <defs>
                        <radialGradient id="paint0_radial_627_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(-90) scale(15)">
                            <stop stop-color="#2EECC5" />
                            <stop offset="1" stop-color="#0F826A" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_627_29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51 54) rotate(-90) scale(8)">
                            <stop stop-color="#2EECC5" />
                            <stop offset="1" stop-color="#05B691" />
                        </radialGradient>
                    </defs>
                </svg>
                Контакты
                <svg className="footer__animate footer__decor-start-right" width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 32L30.8184 43.1816L42 47L30.8184 50.8184L27 62L23.1816 50.8184L12 47L23.1816 43.1816L27 32Z" fill="url(#paint0_radial_627_28)" />
                    <g opacity="0.5">
                        <path d="M8 0L10.0365 5.96353L16 8L10.0365 10.0365L8 16L5.96353 10.0365L0 8L5.96353 5.96353L8 0Z" fill="url(#paint1_radial_627_28)" />
                    </g>
                    <defs>
                        <radialGradient id="paint0_radial_627_28" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27 47) rotate(90) scale(15)">
                            <stop stop-color="#2EECC5" />
                            <stop offset="1" stop-color="#02896D" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_627_28" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8 8) rotate(90) scale(8)">
                            <stop stop-color="#2EECC5" />
                            <stop offset="1" stop-color="#05725B" />
                        </radialGradient>
                    </defs>
                </svg>
            </h2>

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