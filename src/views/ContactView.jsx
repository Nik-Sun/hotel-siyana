import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const SERVICE_ID = 'service_9m9ljqj';
const TEMPLATE_ID = 'template_2kcw5yd';
const PUBLIC_KEY = '8-t23BvEiAoXBbjwq';


export default function ContactView() {
    const formRef = useRef(null);
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //- Validation
        const form = formRef.current;
        const name = form.elements['name']?.value.trim();
        const email = form.elements['email']?.value.trim();
        const message = form.elements['message']?.value.trim();

        if (!name || !email || !message) {
            setStatus({
                type: 'error',
                message: 'Моля, попълнете име, имейл и съобщение.',
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
                        message:
                            'Вашето запитване беше изпратено успешно. Ще се свържем с вас при първа възможност.',
                    });
                    formRef.current.reset();
                },
                (error) => {
                    console.error('EmailJS error:', error);
                    setStatus({
                        type: 'error',
                        message:
                            'Възникна грешка при изпращане на запитването. Моля, опитайте отново по-късно или използвайте директно имейла/телефона.',
                    });
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section className="view section section-alt">
            <div className="container">
                <h2>Контакти</h2>
                <p className="section-intro">
                    Свържете се с нас за повече информация относно наличности, пакети и дългосрочни престои.
                </p>

                <div className="contact-layout">
                    <div className="contact-details">
                        <h3>Данни за връзка</h3>
                        <p>
                            Телефон: <a href="tel:+359879168715">+359 879168715</a><br />
                            Телефон: <a href="tel:+359882715141">+359 882715141</a><br />
                            Имейл: <a href="mailto:hotelsiana@gmail.com">hotelsiana@gmail.com</a>
                        </p>
                        <p>
                            Адрес: <br />
                            ул. „Лагуна“ 2, 8238 Равда
                        </p>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3>Форма за контакт</h3>
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="user_name">Име</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="name"
                                    placeholder="Вашето име"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email">Имейл</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="email"
                                    placeholder="Вашият имейл"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="user_phone">
                                    Телефон (по желание)
                                </label>
                                <input
                                    type="tel"
                                    id="user_phone"
                                    name="phone"
                                    placeholder="Телефон за връзка"
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Съобщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Период на престой, брой гости, предпочитан тип стая..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={isSending}
                            >
                                {isSending
                                    ? 'Изпращане...'
                                    : 'Изпрати запитване'}
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
