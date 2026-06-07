/* ===================== HERO SECTION ===================== */
/* Главный экран — первое что видит пользователь */
/* Содержит заголовок, подзаголовок и две кнопки CTA */
import styles from './HeroSection.module.css'

function HeroSection() {
    return (
        /* Секция на всю высоту экрана с id для якорной ссылки */
        <section className={styles.hero} id="hero">
            <div className={styles.container}>

                {/* Верхний лейбл над заголовком */}
                <span className={styles.badge}>
                    🏆 Premium Autoaufbereitung · Regensburg
                </span>

                {/* Главный заголовок */}
                <h1 className={styles.title}>
                    Ihr Auto verdient
                    <br />
                    <span className={styles.accent}>das Beste</span>
                </h1>

                {/* Подзаголовок */}
                <p className={styles.subtitle}>
                    Professionelle Fahrzeugpflege auf höchstem Niveau —
                    von der Grundreinigung bis zum Premium Detailing.
                    Wir bringen Ihren Wagen zum Strahlen.
                </p>

                {/* Кнопки действий */}
                <div className={styles.buttons}>
                    {/* Главная CTA кнопка */}
                    <a href="#contact" className={styles.btnPrimary}>
                        Termin vereinbaren
                    </a>

                    {/* Вторичная кнопка — к услугам */}
                    <a href="#services" className={styles.btnSecondary}>
                        Unsere Leistungen
                    </a>
                </div>

                {/* Строка с цифрами — доверие */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Fahrzeuge aufbereitet</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>5★</span>
                        <span className={styles.statLabel}>Google Bewertung</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Jahre Erfahrung</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection