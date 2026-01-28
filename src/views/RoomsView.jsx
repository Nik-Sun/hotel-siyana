// Примерни импорти на снимки – коригирай пътищата/имената според реалните файлове
import { useState } from 'react';
import double1 from '../assets/rooms/double-01.jpg';
import double2 from '../assets/rooms/double-02.jpg';
import deluxe1 from '../assets/rooms/double-deluxe-01.jpg';
import deluxe2 from '../assets/rooms/double-deluxe-02.jpg';
import triple1 from '../assets/rooms/triple-01.jpg';
import triple2 from '../assets/rooms/triple-02.jpg';
import maisonette1 from '../assets/rooms/maisonette-01.jpg';
import maisonette2 from '../assets/rooms/maisonette-02.jpg';

import { useTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();
// const rooms = [
//     {
//         id: 'double',
//         title: 'Двойна стая',
//         description: 'Нашата двойна стая е създадена, за да осигури спокойствие и удобство по време на вашата морска почивка. Подходяща е за двойка или двама възрастни, търсещи уютна и функционална обстановка.',
//         amenities: [
//             'Безплатен Wi-Fi',
//             'Климатик',
//             'Тераса',
//             'Телевизор',
//             'Хладилник'
//         ],
//         images: [double1, double2],
//     },
//     {
//         id: 'double-deluxe',
//         title: 'Двойна делукс',
//         description: 'Комфортна и по-просторна двойна стая, подходяща за двойки или семейство с дете. Стаята разполага със спалня или две отделни легла, разтегателен диван.',
//         amenities: ['Безплатен Wi-Fi',
//             'Климатик',
//             'Тераса',
//             'Телевизор',
//             'Хладилник'],
//         images: [deluxe1, deluxe2],
//     },
//     {
//         id: 'triple',
//         title: 'Тройна стая',
//         description: 'Просторна и удобна тройна стая, подходяща за трима гости или семейство. Разполага със спалня и единично легло или три отделни легла.',
//         amenities: ['Безплатен Wi-Fi',
//             'Климатик',
//             'Тераса',
//             'Телевизор',
//             'Хладилник'],
//         images: [triple1, triple2],
//     },
//     {
//         id: 'maisonette',
//         title: 'Мезонет',
//         description: 'Просторен и комфортен мезонет на две нива, подходящ за семейства или по-големи компании. Разполага с две спални помещения и зона за отдих',
//         amenities: ['Безплатен Wi-Fi',
//             'Климатик',
//             'Тераса',
//             'Телевизор',
//             'Хладилник'],
//         images: [maisonette1, maisonette2],
//     },
// ];
const rooms = [
    {
        id: "double",
        images: [double1, double2],
        titleKey: "rooms.items.double.title",
        descriptionKey: "rooms.items.double.description",
        amenitiesKey: "rooms.items.double.amenities",
    },
    {
        id: "double-deluxe",
        images: [deluxe1, deluxe2],
        titleKey: "rooms.items.double-deluxe.title",
        descriptionKey: "rooms.items.double-deluxe.description",
        amenitiesKey: "rooms.items.double-deluxe.amenities",
    },
    {
        id: "triple",
        images: [triple1, triple2],
        titleKey: "rooms.items.triple.title",
        descriptionKey: "rooms.items.triple.description",
        amenitiesKey: "rooms.items.triple.amenities",
    },
    {
        id: "maisonette",
        images: [maisonette1, maisonette2],
        titleKey: "rooms.items.maisonette.title",
        descriptionKey: "rooms.items.maisonette.description",
        amenitiesKey: "rooms.items.maisonette.amenities",
    },
];
export default function RoomsView() {

    const { t } = useTranslation();
    const [lightbox, setLightbox] = useState({
        roomIndex: null,
        imageIndex: null,
    });

    const openLightbox = (roomIndex, imageIndex) => {
        setLightbox({ roomIndex, imageIndex });
    };

    const closeLightbox = () => {
        setLightbox({ roomIndex: null, imageIndex: null });
    };

    const showPrev = () => {
        setLightbox((lb) => {
            if (lb.roomIndex === null) return lb;
            const images = rooms[lb.roomIndex].images;
            return {
                ...lb,
                imageIndex:
                    (lb.imageIndex - 1 + images.length) % images.length,
            };
        });
    };

    const showNext = () => {
        setLightbox((lb) => {
            if (lb.roomIndex === null) return lb;
            const images = rooms[lb.roomIndex].images;
            return {
                ...lb,
                imageIndex: (lb.imageIndex + 1) % images.length,
            };
        });
    };


    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>{t("rooms.h2")}</h2>

                <p className="section-intro">{t("rooms.p")}</p>

                <div className="rooms-grid">
                    {rooms.map((room, rIndex) => {
                        const amenities = t(room.amenitiesKey, {
                            returnObjects: true,
                            defaultValue: [],
                        });

                        const title = t(room.titleKey);

                        return (
                            <article key={room.id} className="room-card">
                                <div className="room-thumbs">
                                    {room.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={title}
                                            className="room-thumb"
                                            loading="lazy"
                                            onClick={() => openLightbox(rIndex, i)}
                                        />
                                    ))}
                                </div>

                                <h3>{title}</h3>

                                <p className="room-description">{t(room.descriptionKey)}</p>

                                <ul className="room-amenities">
                                    {Array.isArray(amenities) &&
                                        amenities.map((item, i) => (
                                            <li key={`${room.id}-${i}`}>{item}</li>
                                        ))}
                                </ul>

                                <p className="room-price">{t("rooms.price")}</p>

                            </article>

                        );
                    })}
                </div>
            </div>

            {lightbox.roomIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            ✕
                        </button>

                        {(() => {
                            const room = rooms[lightbox.roomIndex];
                            const title = t(room.titleKey);
                            const imgSrc = room.images[lightbox.imageIndex];

                            return <img src={imgSrc} alt={title} />;
                        })()}

                        <button
                            className="lightbox-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                        >
                            ‹
                        </button>

                        <button
                            className="lightbox-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );

}



