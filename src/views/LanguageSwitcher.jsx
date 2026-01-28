import { useTranslation } from "react-i18next";
import bgFlag from "../assets/flags/bg.svg";
import enFlag from "../assets/flags/gb.svg";

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
        </div>
    );
}
