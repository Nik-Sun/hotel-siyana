export default function ContactView() {
    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>Контакти</h2>
                <p className="section-intro">
                    Свържете се с нас за повече информация относно наличности, пакети и дългосрочни престои.
                </p>

                <div className="contact-layout">
                    <div className="contact-details">
                        <h3>Данни за връзка</h3>
                        <p>
                            Телефон: <a href="tel:+359000000000">+359 00 000 000</a><br />
                            Имейл: <a href="mailto:info@hotelsiyana.bg">info@hotelsiyana.bg</a>
                        </p>
                        <p>
                            Адрес: <br />
                            0000 Равда, ул. „Примерна“ 1
                        </p>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3>Форма за контакт</h3>
                        <form className="contact-form" method="post" action="mailto:info@hotelsiyana.bg">
                            <label htmlFor="name">Име</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Имейл</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Съобщение</label>
                            <textarea id="message" name="message" rows="4" required />

                            <button type="submit" className="btn-primary">Изпрати</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
