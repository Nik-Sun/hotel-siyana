export default function GalleryView() {
    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>Галерия</h2>
                <p className="section-intro">
                    Разгледайте част от атмосферата на хотел „Сияна“ – уютните стаи и близостта до морето.
                </p>
                <div className="gallery-grid">
                    <figure className="gallery-item">
                        <img src="/images/room-1.jpg" alt="Двойна стая – примерна снимка" />
                        <figcaption>Двойна стая</figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img src="/images/room-2.jpg" alt="Двойна делукс – примерна снимка" />
                        <figcaption>Двойна делукс</figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img src="/images/room-3.jpg" alt="Тройна стая – примерна снимка" />
                        <figcaption>Тройна стая</figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img src="/images/room-4.jpg" alt="Мезонет – примерна снимка" />
                        <figcaption>Мезонет</figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img src="/images/exterior-1.jpg" alt="Фасада на хотел – примерна снимка" />
                        <figcaption>Фасада</figcaption>
                    </figure>
                    <figure className="gallery-item">
                        <img src="/images/sea-view-1.jpg" alt="Гледка към морето – примерна снимка" />
                        <figcaption>Гледка към морето</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
