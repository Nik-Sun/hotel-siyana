import { useState } from "react";
import { useTranslation } from "react-i18next";
import { galleryImages } from "../data/galleryImages";

export default function GalleryView() {
    const { t } = useTranslation();

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

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
                <h2>{t("gallery.h2", "Галерия")}</h2>

                <p className="section-intro">{t("gallery.p")}</p>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => {
                        const alt = t(img.altKey, { defaultValue: "" });
                        const caption = t(img.captionKey, { defaultValue: "" });

                        return (
                            <figure
                                key={img.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img.src} alt={alt} loading="lazy" />
                                {caption && <figcaption>{caption}</figcaption>}
                            </figure>
                        );
                    })}
                </div>
            </div>

            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            ✕
                        </button>

                        {(() => {
                            const img = galleryImages[lightboxIndex];
                            const alt = t(img.altKey, { defaultValue: "" });

                            return <img src={img.src} alt={alt} />;
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
