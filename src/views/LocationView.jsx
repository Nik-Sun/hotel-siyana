export default function LocationView() {
    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>Къде се намира хотел „Сияна“</h2>

                <div className="location-layout">
                    <div className="location-details">
                        <h3>Спокойна локация в Равда</h3>
                        <p>
                            Семеен хотел „Сияна“ се намира в Равда – спокойно курортно
                            селище между Несебър и Слънчев бряг. Хотелът е разположен
                            на тиха улица, на удобно разстояние от плажа, което позволява
                            бърз достъп до морето, без да сте в центъра на шума и тълпите.
                        </p>
                        <p>
                            В близост ще намерите малки магазини, заведения за хранене
                            и спирки на градски транспорт, с които лесно можете да стигнете
                            до стария град Несебър или до по-големите курорти в района.
                        </p>

                        <ul className="location-highlights">
                            <li>Кратко разстояние до плажа</li>
                            <li>Удобен достъп до Несебър и Слънчев бряг</li>
                            <li>Спокойна улица, подходяща за семейства с деца</li>
                        </ul>

                        <p className="location-summary">
                            Ако търсите спокойно място близо до морето, но с лесен достъп
                            до забележителностите по Южното Черноморие, Равда и хотел
                            „Сияна“ са отличен избор.
                        </p>
                    </div>

                    <div className="location-map">

                        <iframe
                            title="Карта – Семеен хотел Сияна, Равда"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1307.2081879217633!2d27.684157570729315!3d42.64899780350126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a698cc12c34627%3A0xe073d1f85dc9786f!2z0JrRitGJ0LAg4oCe0KHQuNGP0L3QsOKAnCAvINCc0L7RgNGB0LrQsCDQv9C-0YfQuNCy0LrQsCDQsiDQoNCw0LLQtNCwIC8g0KDQtdC70LDQutGBINCy0YrQsiDQstC40LvQsCDQt9CwINCz0L7RgdGC0LggItCh0LjRj9C90LAi!5e0!3m2!1sbg!2sbg!4v1767364322654!5m2!1sbg!2sbg"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>


                    </div>
                </div>
            </div>
        </section >
    );
}