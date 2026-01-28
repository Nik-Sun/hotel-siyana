import { galleryImages } from '../data/heroImages.js'
import { useTranslation } from "react-i18next";

export default function HomeView({ onSeeRooms }) {
    const { t } = useTranslation();
    return (
        <section className="view hero">
            <div className="container hero-inner">
                <div className="hero-text">
                    <h1>{t('home.h1')}</h1>
                    <h2>
                        {t('home.h2')}
                    </h2>
                    <ul className="hero-highlights">
                        <li>{t('home.li1')}</li>
                        <li>{t('home.li2')}</li>
                        <li>{t('home.li3')}</li>
                        <li>{t('home.li4')}</li>
                    </ul>
                    <button className="btn-primary" onClick={onSeeRooms}>
                        {t('home.button')}
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
