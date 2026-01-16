import { galleryImages } from '../data/heroImages.js'
export default function HomeView({ onSeeRooms }) {
    return (
        <section className="view hero">
            <div className="container hero-inner">
                <div className="hero-text">
                    <h1>Семеен хотел Siana House - Вашето спокойно място в Равда</h1>
                    <h2>
                        Уютен семеен хотел на крачки от морето, подходящ за семейства с деца,
                        двойки и приятелски компании, които търсят тишина, чистота и истинска почивка.
                    </h2>
                    <ul className="hero-highlights">
                        <li>Всички стаи са оборудвани с климатик и хладилник и разполагат с тераса</li>
                        <li>Безплатен Wi-Fi и телевизор във всяка стая</li>
                        <li>Подходящ за семейства и по-дълъг престой</li>
                        <li>С цел осигуряване на комфорт за всички гости, домашни любимци се допускат единствено в специално обособено крило на хотела.</li>
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
