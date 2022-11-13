import Form from "./Form/Form";
import "./style.scss";

const Banner = () => {

    return (
        <section className="banner" id="banner">
            <div className="container-footer">
                <div className="banner__inner">
                    <Form />
                    <div className="banner__img-box">
                        <img className="banner__img" src="./images/iPhone-13-pro.png" alt="iPhone-13-pro" />
                        <div className="banner__massage banner__massage-left">
                            <div className="banner__massage-icon-phone">
                                <img className="banner__massage-icon" src="./images/phone-icon.svg" alt="Phone" />
                            </div>
                            <div className="banner__massage-box">
                                <div className="banner__massage-title">Уведомление!</div>
                                <div className="banner__massage-text">В скорейшем времени вам перезвонят</div>
                            </div>
                        </div>
                        <div className="banner__massage banner__massage-right">
                            <div className="banner__massage-icon-world">
                                <img className="banner__massage-icon" src="./images/world-icon.svg" alt="Phone" />
                            </div>
                            <div className="banner__massage-box">
                                <div className="banner__massage-title">Работа закончена!</div>
                                <div className="banner__massage-text">Мы закончили работу над вашим сайтом</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;