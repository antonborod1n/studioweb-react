import "./style.scss";

const Cooperation = () => {
    return (
        <section className="section page-section cooperation fp-auto-height-responsive" id="cooperation">
            <div className="container">
                <div className="cooperation__inner">
                    <div className="cooperation__item-info">
                        <h2 className="cooperation__title section__title">Причины сотрудничать с нами</h2>
                        <p className="cooperation__text">
                            Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио
                        </p>
                        <p className="cooperation__text">
                            Пока конкуренты говорят о том, что они лучшие - мы это доказываем делом.
                        </p>
                        <button className="cooperation__btn">Портфолио</button>
                    </div>
                    <div className="cooperation__item cooperation__item-first">
                        <h3 className="cooperation__item-title">Приемлимые цены</h3>
                        <p className="cooperation__item-text">
                            Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными
                        </p>
                        <img className="cooperation__item-icon" src="./images/money-icon.svg" alt="money" />
                    </div>
                    <div className="cooperation__item cooperation__item-second">
                        <h3 className="cooperation__item-title">В сроки сдаем работу!</h3>
                        <p className="cooperation__item-text">
                            Расписываем каждый этап по срокам, и придерживаемся дедлайнов
                        </p>
                        <img className="cooperation__item-icon" src="./images/clock-icon.svg" alt="money" />
                    </div>
                    <div className="cooperation__item cooperation__item-third">
                        <h3 className="cooperation__item-title">Команда специалистов</h3>
                        <p className="cooperation__item-text">
                            В нашей команде множество специалистов, и каждый из них хорошо знает свое дело
                        </p>
                        <img className="cooperation__item-icon" src="./images/user-icon.svg" alt="money" />
                    </div>
                    <div className="cooperation__item cooperation__item-fourth">
                        <h3 className="cooperation__item-title">Консультация перед заказом</h3>
                        <p className="cooperation__item-text">
                            Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы
                        </p>
                        <img className="cooperation__item-icon" src="./images/headphones-icon.svg" alt="money" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cooperation;


