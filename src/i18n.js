import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translations = {
    bg: {
        header: {
            logoMain: "Siana House",
            logoSub: "Семеен хотел · Равда",
            nav: {
                home: "Начало",
                rooms: "Стаи",
                gallery: "Галерия",
                location: "Локация",
                contact: "Контакти",
            },
        },
        footer: {
            rights: "© {{year}} Семеен хотел Siana House, Равда. Всички права запазени.",
        },
        home: {
            h1: "Семеен хотел Siana House - Вашето спокойно място в Равда",
            h2: "Уютен семеен хотел на крачки от морето, подходящ за семейства с деца, двойки и приятелски компании, които търсят тишина, чистота и истинска почивка.",
            li1: "Всички стаи са оборудвани с климатик и хладилник и разполагат с тераса",
            li2: "Безплатен Wi-Fi и телевизор във всяка стая",
            li3: "Подходящ за семейства и по-дълъг престой",
            li4: "С цел осигуряване на комфорт за всички гости, домашни любимци се допускат единствено в специално обособено крило на хотела.",
            button: "Вижте стаите",
        },

        rooms: {
            h2: "Нашите стаи",
            p: `Хотел Siana House предлага няколко типа стаи, подходящи за различни по
                    големина семейства и компании. Всички стаи разполагат с безжичен
                    интернет, климатик, тераса и телевизор.`,
            price: "Цена: по запитване",

            items: {
                double: {
                    title: "Двойна стая",
                    description:
                        "Нашата двойна стая е създадена, за да осигури спокойствие и удобство по време на вашата морска почивка. Подходяща е за двойка или двама възрастни, търсещи уютна и функционална обстановка.",
                    amenities: [
                        "Безплатен Wi-Fi",
                        "Климатик",
                        "Тераса",
                        "Телевизор",
                        "Хладилник",
                    ],
                },
                "double-deluxe": {
                    title: "Двойна делукс",
                    description:
                        "Комфортна и по-просторна двойна стая, подходяща за двойки или семейство с дете. Стаята разполага със спалня или две отделни легла, разтегателен диван.",
                    amenities: [
                        "Безплатен Wi-Fi",
                        "Климатик",
                        "Тераса",
                        "Телевизор",
                        "Хладилник",
                    ],
                },
                triple: {
                    title: "Тройна стая",
                    description:
                        "Просторна и удобна тройна стая, подходяща за трима гости или семейство. Разполага със спалня и единично легло или три отделни легла.",
                    amenities: [
                        "Безплатен Wi-Fi",
                        "Климатик",
                        "Тераса",
                        "Телевизор",
                        "Хладилник",
                    ],
                },
                maisonette: {
                    title: "Мезонет",
                    description:
                        "Просторен и комфортен мезонет на две нива, подходящ за семейства или по-големи компании. Разполага с две спални помещения и зона за отдих",
                    amenities: [
                        "Безплатен Wi-Fi",
                        "Климатик",
                        "Тераса",
                        "Телевизор",
                        "Хладилник",
                    ],
                },
            },
        },

        gallery: {
            p: `Разгледайте някои от моментите и атмосферата в семеен хотел „Siana House“ –
                    стаи, тераси с гледка към морето, общи части и околността на Равда.`,
            h2: "Галерия",
            items: {
                "bbq-view": {
                    alt: "Барбекю",
                    caption: "Оборудвано барбекю е на разположение на гостите на хотела",
                },
                "double-room": {
                    alt: "Двойна стая в семеен хотел Siana House",
                    caption: "Уютна двойна стая",
                },
                "triple-room": {
                    alt: "Тройна стая, подходяща за семейства с дете",
                    caption: "Тройна стая за семейства",
                },
                maisonette: {
                    alt: "Мезонет на две нива в семеен хотел Siana House",
                    caption: "Просторен мезонет",
                },
                "ravda-beach": {
                    alt: "Плаж в Равда близо до хотел Siana House",
                    caption: "Плажът в Равда наблизо",
                },
                "hotel-backyard": {
                    alt: "Задния двор на хотела",
                    caption: "Двора на хотела",
                },
            },
        },

        location: {
            h2: 'Къде се намира хотел Siana House',
            h3: 'Спокойна локация в Равда',
            p1: `Семеен хотел Siana House се намира в Равда – спокойно курортно
                            селище между Несебър и Слънчев бряг. Хотелът е разположен
                            на тиха улица, на удобно разстояние от плажа, което позволява
                            бърз достъп до морето, без да сте в центъра на шума и тълпите.`,
            p2: `В близост ще намерите малки магазини, заведения за хранене
                            и спирки на градски транспорт, с които лесно можете да стигнете
                            до стария град Несебър или до по-големите курорти в района.`,
            li1: "Кратко разстояние до плажа",
            li2: "Удобен достъп до Несебър и Слънчев бряг",
            li3: "Спокойна улица, подходяща за семейства с деца",
            summary: 'Ако търсите спокойно място близо до морето, но с лесен достъп до забележителностите по Южното Черноморие, Равда и хотел Siana House са отличен избор.',
            iframeTitle: "Карта – Семеен хотел Siana House, Равда",
        },

        contacts: {
            title: "Контакти",
            formErrorMessage: "Моля, попълнете име, имейл и съобщение.",
            formSuccessMessage:
                "Вашето запитване беше изпратено успешно. Ще се свържем с вас при първа възможност.",
            emailJsError:
                "Възникна грешка при изпращане на запитването. Моля, опитайте отново по-късно или използвайте директно имейла/телефона.",
            intro:
                "Свържете се с нас за повече информация относно наличности, пакети и дългосрочни престои.",
            contactHeader: "Данни за връзка",
            phone: "Телефон",
            email: "Имейл",
            address: "Адрес:",
            addressText: ' ул. „Лагуна“ 2, 8238 Равда',
            formTitle: "Форма за контакт",
            name: "Име",
            namePlaceholder: "Вашето име",
            emailPlaceholder: "Вашият имейл",
            phoneInput: "Телефон (по желание)",
            phonePlaceholder: "Телефон за връзка",
            message: "Съобщение",
            messagePlaceholder:
                "Период на престой, брой гости, предпочитан тип стая...",
            buttonState: "Изпрати запитване",
            buttonStateSending: "Изпращане",
        },
    },

    en: {
        header: {
            logoMain: "Siana House",
            logoSub: "Family hotel · Ravda",
            nav: {
                home: "Home",
                rooms: "Rooms",
                gallery: "Gallery",
                location: "Location",
                contact: "Contacts",
            },
        },
        footer: {
            rights: "© {{year}} Family Hotel Siana House, Ravda. All rights reserved.",
        },

        home: {
            h1: "Family Hotel Siana House - Your peaceful place in Ravda",
            h2: "A cozy family hotel just steps from the sea, suitable for families with children, couples, and groups of friends seeking peace, cleanliness, and true relaxation.",
            li1: "All rooms are equipped with air conditioning and a refrigerator and have a terrace",
            li2: "Free Wi-Fi and a TV in every room",
            li3: "Suitable for families and longer stays",
            li4: "In order to ensure comfort for all guests, pets are allowed only in a specially designated wing of the hotel.",
            button: "View rooms",
        },

        rooms: {
            h2: "Our Rooms",
            p: `Hotel Siana House offers several types of rooms, suitable for families and groups of different sizes. All rooms have wireless internet, air conditioning, a terrace, and a TV.`,
            price: "Price: upon request",

            items: {
                double: {
                    title: "Double Room",
                    description:
                        "Our double room is designed to provide peace and comfort during your seaside vacation. It is suitable for a couple or two adults seeking a cozy and functional environment.",
                    amenities: [
                        "Free Wi-Fi",
                        "Air conditioning",
                        "Terrace",
                        "TV",
                        "Refrigerator",
                    ],
                },
                "double-deluxe": {
                    title: "Double Deluxe Room",
                    description:
                        "A comfortable and more spacious double room, suitable for couples or a family with a child. The room features a double bed or two single beds and a sofa bed.",
                    amenities: [
                        "Free Wi-Fi",
                        "Air conditioning",
                        "Terrace",
                        "TV",
                        "Refrigerator",
                    ],
                },
                triple: {
                    title: "Triple Room",
                    description:
                        "A spacious and comfortable triple room, suitable for three guests or a family. It features a double bed and a single bed or three separate beds.",
                    amenities: [
                        "Free Wi-Fi",
                        "Air conditioning",
                        "Terrace",
                        "TV",
                        "Refrigerator",
                    ],
                },
                maisonette: {
                    title: "Maisonette",
                    description:
                        "A spacious and comfortable two-level maisonette, suitable for families or larger groups. It features two bedrooms and a relaxation area.",
                    amenities: [
                        "Free Wi-Fi",
                        "Air conditioning",
                        "Terrace",
                        "TV",
                        "Refrigerator",
                    ],
                },
            },
        },

        gallery: {
            p: `Explore some of the moments and atmosphere at the family hotel “Siana House” –
                    rooms, terraces with sea views, common areas, and the surroundings of Ravda.`,
            h2: "Gallery",
            items: {
                "bbq-view": {
                    alt: "Barbecue area",
                    caption:
                        "A fully equipped barbecue area is available for hotel guests",
                },
                "double-room": {
                    alt: "Double room at family hotel Siana House",
                    caption: "Cozy double room",
                },
                "triple-room": {
                    alt: "Triple room suitable for families with a child",
                    caption: "Triple room for families",
                },
                maisonette: {
                    alt: "Two-level maisonette at family hotel Siana House",
                    caption: "Spacious maisonette",
                },
                "ravda-beach": {
                    alt: "Beach in Ravda near Siana House hotel",
                    caption: "Nearby beach in Ravda",
                },
                "hotel-backyard": {
                    alt: "Hotel backyard",
                    caption: "The hotel courtyard",
                },
            },
        },

        location: {
            h2: 'Where is Siana House Hotel located',
            h3: 'A quiet location in Ravda',
            p1: `Family Hotel Siana House is located in Ravda – a peaceful seaside
            resort village between Nessebar and Sunny Beach. The hotel is situated
            on a quiet street, at a convenient distance from the beach, allowing
            quick access to the sea without being in the center of noise and crowds.`,
            p2: `Nearby you will find small shops, dining establishments
            and public transport stops, making it easy to reach
            the old town of Nessebar or the larger resorts in the area.`,
            li1: 'Short distance to the beach',
            li2: 'Convenient access to Nessebar and Sunny Beach',
            li3: 'Quiet street, suitable for families with children',
            summary: 'If you are looking for a peaceful place close to the sea, yet with easy access to the attractions of the Southern Black Sea coast, Ravda and Siana House Hotel are an excellent choice.',
            iframeTitle: 'Map – Family Hotel Siana House, Ravda',
        },


        contacts: {
            title: "Contacts",
            formErrorMessage: "Please fill in name, email, and message.",
            formSuccessMessage:
                "Your inquiry was sent successfully. We will contact you as soon as possible.",
            emailJsError:
                "An error occurred while sending the inquiry. Please try again later or use the email/phone directly.",
            intro:
                "Contact us for more information about availability, packages, and long-term stays.",
            contactHeader: "Contact details",
            phone: "Phone",
            email: "Email",
            address: "Address:",
            addressText: ' 2 “Laguna” St., 8238 Ravda',
            formTitle: "Contact form",
            name: "Name",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            phoneInput: "Phone (optional)",
            phonePlaceholder: "Contact phone",
            message: "Message",
            messagePlaceholder:
                "Period of stay, number of guests, preferred room type...",
            buttonState: "Send inquiry",
            buttonStateSending: "Sending",
        },
    },
};

i18n.use(initReactI18next).init({
    resources: {
        bg: { translation: translations.bg },
        en: { translation: translations.en },
    },
    fallbackLng: "bg",
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
