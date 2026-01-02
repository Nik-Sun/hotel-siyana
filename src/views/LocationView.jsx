export default function LocationView() {
    return (
        <section className="view section">
            <div className="container">
                <h2>Локация</h2>
                <p className="section-intro">
                    Семеен хотел „Сияна“ се намира в Равда – спокойно курортно селище на морския бряг,
                    удобно разположено близо до Несебър и Слънчев бряг.
                </p>

                <div className="location-layout">
                    <div className="location-details">
                        <h3>Адрес</h3>
                        <p>
                            {/* TODO: реален адрес */}
                            0000 Равда<br />
                            ул. „Примерна“ 1
                        </p>
                        <p>
                            Лесен достъп до плажа и близки заведения, подходящо за семейства с деца и по-дълги престои.
                        </p>
                    </div>
                    <div className="location-map">
                        <div className="map-placeholder">
                            Тук ще има карта (Google Maps iframe)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
