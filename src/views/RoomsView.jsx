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

const rooms = [
    {
        id: 'double',
        title: 'Двойна стая',
        description: 'Уютна двойна стая, подходяща за...',
        amenities: [
            'Безплатен Wi-Fi',
            'Климатик',
            'Тераса с изглед към морето',
            'Телевизор',
        ],
        images: [double1, double2],
    },
    {
        id: 'double-deluxe',
        title: 'Двойна делукс',
        description: 'По-просторна двойна стая...',
        amenities: ['Безплатен Wi-Fi', 'Климатик', 'Тераса', 'Телевизор'],
        images: [deluxe1, deluxe2],
    },
    {
        id: 'triple',
        title: 'Тройна стая',
        description: 'Подходяща за семейства с дете...',
        amenities: ['Безплатен Wi-Fi', 'Климатик', 'Тераса', 'Телевизор'],
        images: [triple1, triple2],
    },
    {
        id: 'maisonette',
        title: 'Мезонет',
        description: 'Двуетажно помещение...',
        amenities: ['Безплатен Wi-Fi', 'Климатик', 'Тераса', 'Телевизор'],
        images: [maisonette1, maisonette2],
    },
];
export default function RoomsView() {
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
                <h2>Нашите стаи</h2>
                <p className="section-intro">
                    Хотел Siana House предлага няколко типа стаи, подходящи за различни по
                    големина семейства и компании. Всички стаи разполагат с безжичен
                    интернет, климатик, тераса и телевизор.
                </p>

                <div className="rooms-grid">
                    {rooms.map((room, rIndex) => (
                        <article key={room.id} className="room-card">
                            <div className="room-thumbs">
                                {room.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={room.title}
                                        className="room-thumb"
                                        loading="lazy"
                                        onClick={() =>
                                            openLightbox(rIndex, i)
                                        }
                                    />
                                ))}
                            </div>

                            <h3>{room.title}</h3>

                            <p className="room-description">
                                {room.description}
                            </p>

                            <ul className="room-amenities">
                                {room.amenities.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <p className="room-price">Цена: по запитване</p>
                        </article>
                    ))}
                </div>
            </div>

            {lightbox.roomIndex !== null && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
                    <div
                        className="lightbox"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="lightbox-close"
                            onClick={closeLightbox}
                        >
                            ✕
                        </button>

                        <img
                            src={
                                rooms[lightbox.roomIndex].images[
                                lightbox.imageIndex
                                ]
                            }
                            alt={
                                rooms[lightbox.roomIndex].title ||
                                'Стая в хотел „Сияна“'
                            }
                        />

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



