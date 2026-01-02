import { galleryImages } from '../data/heroImages.js'
export default function HomeView({ onSeeRooms }) {
    return (
        <section className="view hero">
            <div className="container hero-inner">
                <div className="hero-text">
                    <h1>Семеен хотел „Сияна“ - Вашето спокойно място в Равда</h1>
                    <h2>
                        Уютен семеен хотел на крачки от морето, подходящ за семейства с деца,
                        двойки и приятелски компании, които търсят тишина, чистота и истинска почивка.
                    </h2>
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
                    <div className="hero-image">
                        <img
                            src={galleryImages[1].src}
                            alt={galleryImages[1].alt} />
                    </div>
                </div>
            </div>
        </section>
    );
}
