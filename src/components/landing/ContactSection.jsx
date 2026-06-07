/* ===================== CONTACT SECTION ===================== */
/* Секция контактов — форма заявки + контактные данные */
/* Форма пока без бэкенда — отправка через mailto */
import { useState } from 'react'
import styles from './ContactSection.module.css'

/* Контактные данные — легко редактировать */
const CONTACT_INFO = [
    {
        id: 1,
        icon: '📍',
        label: 'Adresse',
        value: 'Regensburg, Bayern',
    },
    {
        id: 2,
        icon: '📞',
        label: 'Telefon',
        value: '+49 123 456 789',
    },
    {
        id: 3,
        icon: '✉️',
        label: 'E-Mail',
        value: 'info@autoglanz-regensburg.de',
    },
    {
        id: 4,
        icon: '🕐',
        label: 'Öffnungszeiten',
        value: 'Mo–Sa: 8:00 – 18:00 Uhr',
    },
]

function ContactSection() {
    /* Состояние полей формы */
    const [form, setForm] = useState({
        name: '',
        phone: '',
        service: '',
        message: '',
    })

    /* Обновляем нужное поле в стейте */
    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /* Отправка через mailto — временное решение без бэкенда */
    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = `Terminanfrage von ${form.name}`
        const body = `Name: ${form.name}%0ATelefon: ${form.phone}%0ALeistung: ${form.service}%0ANachricht: ${form.message}`
        window.location.href = `mailto:info@autoglanz-regensburg.de?subject=${subject}&body=${body}`
    }

    return (
        /* id для якорной ссылки из Navbar */
        <section className={styles.contact} id="contact">
            <div className={styles.container}>

                {/* Заголовок секции */}
                <h2 className={styles.sectionTitle}>
                    Termin <span className={styles.accent}>vereinbaren</span>
                </h2>

                {/* Подзаголовок */}
                <p className={styles.sectionSubtitle}>
                    Kontaktieren Sie uns — wir melden uns innerhalb von 24 Stunden.
                </p>

                {/* Двухколоночный layout: форма + контакты */}
                <div className={styles.grid}>

                    {/* Левая колонка — форма */}
                    <div className={styles.formWrapper}>
                        <form className={styles.form} onSubmit={handleSubmit}>

                            {/* Имя */}
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="name">
                                    Ihr Name *
                                </label>
                                <input
                                    className={styles.input}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Max Mustermann"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Телефон */}
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="phone">
                                    Telefonnummer *
                                </label>
                                <input
                                    className={styles.input}
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+49 123 456 789"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Выбор услуги */}
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="service">
                                    Gewünschte Leistung
                                </label>
                                <select
                                    className={styles.select}
                                    id="service"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Bitte wählen...</option>
                                    <option value="Basic">Basic Paket</option>
                                    <option value="Premium">Premium Paket</option>
                                    <option value="Detailing">Detailing Paket</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                </select>
                            </div>

                            {/* Сообщение */}
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="message">
                                    Nachricht
                                </label>
                                <textarea
                                    className={styles.textarea}
                                    id="message"
                                    name="message"
                                    placeholder="Ihr Fahrzeug, besondere Wünsche..."
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            {/* Кнопка отправки */}
                            <button className={styles.submitBtn} type="submit">
                                Anfrage senden ✉️
                            </button>

                        </form>
                    </div>

                    {/* Правая колонка — контактные данные */}
                    <div className={styles.infoWrapper}>

                        {/* Карточки с контактами */}
                        {CONTACT_INFO.map(item => (
                            <div key={item.id} className={styles.infoCard}>
                                {/* Иконка */}
                                <span className={styles.infoIcon}>{item.icon}</span>
                                <div className={styles.infoText}>
                                    {/* Лейбл */}
                                    <span className={styles.infoLabel}>{item.label}</span>
                                    {/* Значение */}
                                    <span className={styles.infoValue}>{item.value}</span>
                                </div>
                            </div>
                        ))}

                        {/* Блок с WhatsApp */}
                        <div className={styles.whatsapp}>
                            <p className={styles.whatsappText}>
                                Schneller per WhatsApp erreichbar:
                            </p>

                            <a href="https://wa.me/49123456789"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.whatsappBtn}
                            >
                                💬 WhatsApp schreiben
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactSection