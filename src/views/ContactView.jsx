import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const SERVICE_ID = 'service_9m9ljqj';
const TEMPLATE_ID = 'template_2kcw5yd';
const PUBLIC_KEY = '8-t23BvEiAoXBbjwq';


export default function ContactView() {
    const formRef = useRef(null);
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSending, setIsSending] = useState(false);
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();

        //- Validation
        const form = formRef.current;
        const name = form.elements['name']?.value.trim();
        const email = form.elements['email']?.value.trim();
        const message = form.elements['message']?.value.trim();

        const formErrorMessage = t('contacts.formErrorMessage');
        const formSuccessMessage = t('contacts.formSuccessMessage')
        const emailJsError = t('contacts.emailJsError');

        if (!name || !email || !message) {
            setStatus({
                type: 'error',
                message: formErrorMessage,
            });
            return;
        }

        setIsSending(true);
        setStatus({ type: null, message: '' });

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus({
                        type: 'success',
                        message: formSuccessMessage,
                    });
                    formRef.current.reset();
                },
                (error) => {
                    console.error('EmailJS error:', error);
                    setStatus({
                        type: 'error',
                        message: emailJsError,
                    });
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    const buttonState = t('contacts.buttonState');
    const buttonStateSending = t('contacts.buttonStateSending');
    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>{t('contacts.title')}</h2>
                <p className="section-intro">
                    {t('contacts.intro')}
                </p>

                <div className="contact-layout">
                    <div className="contact-details">
                        <h3>{t('contacts.contactHeader')}</h3>
                        <p>
                            {t('contacts.phone')}: <a href="tel:+359879168715">+359 879168715</a><br />
                            {t('contacts.phone')}: <a href="tel:+359882715141">+359 882715141</a><br />
                            {t('contacts.email')}: <a href="mailto:hotelsiana@gmail.com">hotelsiana@gmail.com</a>
                        </p>
                        <p>
                            {t('contacts.address')}: <br />
                            {t('contacts.addressText')}
                        </p>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3>{t('contacts.formTitle')}</h3>
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="user_name">{t('contacts.name')}</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="name"
                                    placeholder={t('contacts.namePlaceholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email">{t('contacts.email')}</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="email"
                                    placeholder={t('contacts.emailPlaceholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="user_phone">
                                    {t('contacts.phoneInput')}
                                </label>
                                <input
                                    type="tel"
                                    id="user_phone"
                                    name="phone"
                                    placeholder={t('contacts.phonePlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">{t('contacts.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder={t('contacts.messagePlaceholder')}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={isSending}
                            >
                                {
                                    isSending
                                        ? buttonState
                                        : buttonStateSending}
                            </button>

                            {status.type && (
                                <p
                                    className={
                                        status.type === 'success'
                                            ? 'contact-status contact-status--success'
                                            : 'contact-status contact-status--error'
                                    }
                                >
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
