import "./style.scss";

const Top = () => {
    return (
        <div className="top">
            <div className="container-top">
                <div className="top__inner">
                    <div className="top__content">
                        <h1 className="top__title">РАЗРАБОТКА САЙТОВ <span>ДЛЯ ТВОЕГО БИЗНЕСА</span></h1>
                        <p className="top__text">
                            Мы - студия web-разработки, работаем уже более 3-х лет<span>, готовы разработать для вас
                                сайт в кротчайшие сроки.</span>
                        </p>
                        <button className="top__btn btn">Подробнее
                            <img className="top__btn-arrow" src="./images/arrow-right-btn.svg" alt="Arrow" width="20px"
                                height="20px" />
                        </button>
                        <a className="top__link" href="#">Остались вопросы?</a>
                    </div>
                    <div className="top__img-box">
                        <img className="top__img" src="./images/men.png" alt="Images bg" />
                    </div>
                </div>
                <img className="top__img-line" src="./images/first-sccreen-border-bottom.png" alt="" />
                <div className="top__bottom">
                    <button className="bottom__btn btn">Работаем в сфере web-разработки более 3-х лет</button>
                    <button className="bottom__btn btn">В нашей команде находятся лучшие исполнители</button>
                </div>
            </div>
        </div>
    )
}

export default Top;