import { Navigation, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.scss";

const Price = () => {
    return (
        <section className="section page-section price fp-auto-height-responsive">
            <div className="container-price">
                <div className="price__inner">
                    <h2 className="price__title section__title">Тарифы</h2>
                    <div className="price__slider">
                        <Swiper
                            effect={"coverflow"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[Navigation, A11y, EffectCoverflow]}
                            navigation
                            loop={true}
                            autoHeight={true}
                            centeredSlides={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 27
                                },

                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 27
                                },

                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 32
                                }
                            }
                            }
                        >
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Каталог”</h3>
                                    <p className="price__slider-text">
                                        Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От 60.000₽</span>
                                            <span className="price__slider-order-day">От 15 дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Визитка”</h3>
                                    <p className="price__slider-text">
                                        Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От 30.000₽</span>
                                            <span className="price__slider-order-day">От 5 дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Интернет магизин”</h3>
                                    <p className="price__slider-text">
                                        Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От 75.000₽</span>
                                            <span className="price__slider-order-day">От 30 дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Landing page”</h3>
                                    <p className="price__slider-text">
                                        Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги
                                        и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву
                                        лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть
                                        не может.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От 25.000₽</span>
                                            <span className="price__slider-order-day">От 17 дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Корп.сайт”</h3>
                                    <p className="price__slider-text">
                                        Корпоративный сайт – это крупномасштабный портал, который создается не только для контакта
                                        организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и
                                        руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий
                                        у партнёров и контрагентов уважение и интерес.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От 60.000₽</span>
                                            <span className="price__slider-order-day">От 17 дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="price__slider-item">
                                    <h3 className="price__slider-title">Сайт “Индивидуальный”</h3>
                                    <p className="price__slider-text">
                                        Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее
                                        технического задания и сроков выполнения.
                                    </p>
                                    <div className="price__slider-order">
                                        <div className="price__slider-order-box">
                                            <span className="price__slider-order-from">От ?₽</span>
                                            <span className="price__slider-order-day">От ? дней</span>
                                        </div>
                                        <a className="price__slider-order-btn" href="#banner">Подробнее
                                            <img className="price__slider-btn-arrow" src="./images/arrow-right-btn-grey.svg" alt="btn-arrow"
                                                width="25px" height="25px" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Price;