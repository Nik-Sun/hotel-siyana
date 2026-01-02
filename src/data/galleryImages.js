// Смени имената/пътищата според реалните файлове в assets
import g1 from '../assets/gallery/gallery-04.jpg';
import g2 from '../assets/rooms/double-01.jpg';
import g3 from '../assets/rooms/triple-01.jpg';
import g4 from '../assets/rooms/maisonette-01.jpg';
import g5 from '../assets/gallery/gallery-02.jpg';
import g6 from '../assets/gallery/gallery-05.jpg';

export const galleryImages = [
    {
        id: 'bbq-view',
        src: g1,
        alt: 'Барбекю',
        caption: 'Оборудвано барбекю е на разположение на гостите на хотела',
    },
    {
        id: 'double-room',
        src: g2,
        alt: 'Двойна стая в семеен хотел „Сияна“',
        caption: 'Уютна двойна стая',
    },
    {
        id: 'triple-room',
        src: g3,
        alt: 'Тройна стая, подходяща за семейства с дете',
        caption: 'Тройна стая за семейства',
    },
    {
        id: 'maisonette',
        src: g4,
        alt: 'Мезонет на две нива в семеен хотел „Сияна“',
        caption: 'Просторен мезонет',
    },
    {
        id: 'ravda-beach',
        src: g5,
        alt: 'Плаж в Равда близо до хотел „Сияна“',
        caption: 'Плажът в Равда наблизо',
    },
    {
        id: 'hotel-backyard',
        src: g6,
        alt: 'Задния двор на хотела',
        caption: 'Двора на хотела',
    },
];
