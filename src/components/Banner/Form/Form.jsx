import { useState } from "react";
import "./style.scss";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [price, setPrice] = useState('');

    return (
        <form action="#" className="form">
            <h2 className="form__title">Оставь заявку</h2>
            <div className="form__box">
                <p className="form__cookies">
                    <label className="form__label" for="name">Ваше ФИО</label>
                    <input className="form__input" id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p className="form__cookies">
                    <label className="form__label" for="email">Ваш E-MAIL адрес</label>
                    <input className="form__input" id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p className="form__cookies">
                    <label className="form__label" for="phone">Ваш номер телефона</label>
                    <input className="form__input" id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </p>
                <p className="form__cookies">
                    <label className="form__label" for="comment">Ваш комментарий ( по желанию )</label>
                    <input className="form__input" id="comment" name="comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                </p>
                <p className="form__cookies">
                    <label className="form__label" for="price">Бюджет на сайт</label>
                    <input className="form__input" id="price" name="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <button className="form-submit__btn btn" type="submit" id="submit">Отправить</button>
            </div>
        </form>
    )
}

export default Form;