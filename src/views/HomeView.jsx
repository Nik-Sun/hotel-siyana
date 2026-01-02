export default function HomeView({ onSeeRooms }) {
    return (
        <section className="view hero">
            <div className="container hero-inner">
                <div className="hero-text">
                    <h1>Семеен хотел „Сияна“ – Равда</h1>
                    <p>
                        Малък семеен хотел с уютна атмосфера и стаи с източно изложение и гледка към морето –
                        идеален за по-дълги престои и спокойна семейна почивка.
                    </p>
                    <ul className="hero-highlights">
                        <li>Всички стаи с тераса и морска гледка</li>
                        <li>Безплатен Wi-Fi</li>
                        <li>Подходящ за семейства и по-дълъг престой</li>
                    </ul>
                    <button className="btn-primary" onClick={onSeeRooms}>
                        Вижте стаите
                    </button>
                </div>
                <div className="hero-image">
                    <div className="hero-image-placeholder">
                        Снимка на хотела / морето
                    </div>
                </div>
            </div>
        </section>
    );
}
