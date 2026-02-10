import { useTranslation } from "react-i18next";
import bgFlag from "../assets/flags/bg2.svg";
import enFlag from "../assets/flags/gb2.svg";
import ruFlag from "../assets/flags/ru.svg";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const current = i18n.resolvedLanguage || i18n.language;

    const setLang = (lng) => () => i18n.changeLanguage(lng);

    return (
        <div className="lang-switcher" role="group" aria-label="Language selector">
            <button
                type="button"
                className={`lang-btn ${current?.startsWith("bg") ? "active" : ""}`}
                onClick={setLang("bg")}
                aria-label="Switch to Bulgarian"
                title="BG"
            >
                <img src={bgFlag} alt="Bulgarian" />
            </button>

            <button
                type="button"
                className={`lang-btn ${current?.startsWith("en") ? "active" : ""}`}
                onClick={setLang("en")}
                aria-label="Switch to English"
                title="EN"
            >
                <img src={enFlag} alt="English" />
            </button>
            <button
                type="button"
                className={`lang-btn ${current?.startsWith("ru") ? "active" : ""}`}
                onClick={setLang("ru")}
                aria-label="Switch to Russian"
                title="RU"
            >
                <img src={ruFlag} alt="Russian" />
            </button>
        </div>
    );
}
