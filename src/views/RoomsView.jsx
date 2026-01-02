export default function RoomsView() {
    return (
        <section className="view section">
            <div className="container">
                <h2>Нашите стаи</h2>
                <p className="section-intro">
                    Хотел „Сияна“ предлага няколко типа стаи, подходящи за различни по големина семейства.
                    Всички стаи разполагат с безжичен интернет, климатик, тераса с гледка към морето и телевизор.
                </p>

                <div className="rooms-grid">
                    <article className="room-card">
                        <h3>Двойна стая</h3>
                        <p className="room-description">
                            Уютна двойна стая, подходяща за семейна двойка или двама души.
                        </p>
                        <ul className="room-amenities">
                            <li>Безплатен Wi-Fi</li>
                            <li>Климатик</li>
                            <li>Тераса с изглед към морето</li>
                            <li>Телевизор</li>
                        </ul>
                        <p className="room-price">Цена: по запитване</p>
                    </article>

                    <article className="room-card">
                        <h3>Двойна делукс</h3>
                        <p className="room-description">
                            По-просторна двойна стая с допълнителен комфорт, подходяща за по-дълъг престой.
                        </p>
                        <ul className="room-amenities">
                            <li>Безплатен Wi-Fi</li>
                            <li>Климатик</li>
                            <li>Тераса с изглед към морето</li>
                            <li>Телевизор</li>
                        </ul>
                        <p className="room-price">Цена: по запитване</p>
                    </article>

                    <article className="room-card">
                        <h3>Тройна стая</h3>
                        <p className="room-description">
                            Подходяща за семейства с дете или трима възрастни, с достатъчно пространство за комфортен престой.
                        </p>
                        <ul className="room-amenities">
                            <li>Безплатен Wi-Fi</li>
                            <li>Климатик</li>
                            <li>Тераса с изглед към морето</li>
                            <li>Телевизор</li>
                        </ul>
                        <p className="room-price">Цена: по запитване</p>
                    </article>

                    <article className="room-card">
                        <h3>Мезонет</h3>
                        <p className="room-description">
                            Двуетажно помещение, подходящо за по-големи семейства или група приятели, които търсят повече пространство и уют.
                        </p>
                        <ul className="room-amenities">
                            <li>Безплатен Wi-Fi</li>
                            <li>Климатик</li>
                            <li>Тераса с изглед към морето</li>
                            <li>Телевизор</li>
                        </ul>
                        <p className="room-price">Цена: по запитване</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
