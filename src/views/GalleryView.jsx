import { useState } from 'react';
import { galleryImages } from '../data/galleryImages';

export default function GalleryView() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const showPrev = () => {
        setLightboxIndex((current) => {
            if (current === null) return current;
            return (current - 1 + galleryImages.length) % galleryImages.length;
        });
    };

    const showNext = () => {
        setLightboxIndex((current) => {
            if (current === null) return current;
            return (current + 1) % galleryImages.length;
        });
    };

    return (
        <section className="view section">
            <div className="container">
                <h2>Галерия</h2>
                <p className="section-intro">
                    Разгледайте някои от моментите и атмосферата в семеен хотел „Сияна“ –
                    стаи, тераси с гледка към морето, общи части и околността на Равда.
                </p>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <figure
                            key={img.id}
                            className="gallery-item"
                            onClick={() => openLightbox(index)}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            {img.caption && (
                                <figcaption>{img.caption}</figcaption>
                            )}
                        </figure>
                    ))}
                </div>
            </div>

            {lightboxIndex !== null && (
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
                            src={galleryImages[lightboxIndex].src}
                            alt={galleryImages[lightboxIndex].alt}
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
