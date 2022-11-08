import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Portfolio = () => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <section className="section page-section portfolio fp-auto-height-responsive">
            <div className="portfolio__inner">
                <div className="portfolio__info">
                    <h2 className="portfolio__title section__title">Наше портфолио</h2>
                    <p className="portfolio__text">
                        В данном портфолио вы сможете увидеть кейсы наших работ на 2022 - 2023 год
                    </p>
                    <button className="portfolio__btn btn">Компьютерные версии</button>
                </div>
                <div className="portfolio__slider">
                    <Slider {...settings}>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/1.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/2.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/3.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/4.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/5.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/6.jpg" alt="Слайдер картинка" />
                        </div>
                        <div className="portfolio__slider-item">
                            <img className="portfolio__slider-img" src="./images/slider/7.jpg" alt="Слайдер картинка" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;