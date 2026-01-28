import { useTranslation } from "react-i18next";

export default function LocationView() {
    const { t } = useTranslation();
    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>{t('location.h2')}</h2>

                <div className="location-layout">
                    <div className="location-details">
                        <h3>{t('location.h3')}</h3>
                        <p>
                            {t('location.p1')}
                        </p>
                        <p>
                            {t('location.p2')}
                        </p>

                        <ul className="location-highlights">
                            <li>{t('location.li1')}</li>
                            <li>{t('location.li2')}</li>
                            <li>{t('location.li3')}</li>
                        </ul>

                        <p className="location-summary">
                            {t('location.summary')}
                        </p>
                    </div>

                    <div className="location-map">

                        <iframe
                            title={t('location.iframeTitle')}
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