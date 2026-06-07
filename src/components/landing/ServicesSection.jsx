/* ===================== SERVICES SECTION ===================== */
/* Секция услуг — 4 карточки с иконкой, заголовком и описанием */
import styles from './ServicesSection.module.css'

/* Данные услуг вынесены отдельно — легко редактировать */
const SERVICES = [
    {
        id: 1,
        icon: '🚿',
        title: 'Außenreinigung',
        description: 'Professionelle Handwäsche, Felgenreinigung, Reifenpflege und Trocknung — ohne Kratzer, nur mit Premium-Produkten.',
    },
    {
        id: 2,
        icon: '🧹',
        title: 'Innenreinigung',
        description: 'Tiefenreinigung des Innenraums — Sitze, Teppiche, Armaturenbrett, Scheiben und Geruchsbeseitigung mit Ozonbehandlung.',
    },
    {
        id: 3,
        icon: '✨',
        title: 'Politur & Lackpflege',
        description: 'Entfernung von Kratzern, Swirls und Oxidation. Ihr Lack strahlt wieder wie am ersten Tag.',
    },
    {
        id: 4,
        icon: '💎',
        title: 'Premium Detailing',
        description: 'Keramikversiegelung, Paint Protection Film und vollständige Fahrzeugaufbereitung für maximalen Schutz und Glanz.',
    },
]

function ServicesSection() {
    return (
        /* id для якорной ссылки из Navbar */
        <section className={styles.services} id="services">
            <div className={styles.container}>

                {/* Заголовок секции */}
                <h2 className={styles.sectionTitle}>
                    Unsere <span className={styles.accent}>Leistungen</span>
                </h2>

                {/* Подзаголовок */}
                <p className={styles.sectionSubtitle}>
                    Von der einfachen Wäsche bis zum professionellen Detailing —
                    wir haben die passende Lösung für Ihr Fahrzeug.
                </p>

                {/* Сетка карточек услуг */}
                <div className={styles.grid}>
                    {SERVICES.map(service => (
                        <div key={service.id} className={styles.card}>

                            {/* Иконка услуги */}
                            <div className={styles.cardIcon}>{service.icon}</div>

                            {/* Название услуги */}
                            <h3 className={styles.cardTitle}>{service.title}</h3>

                            {/* Описание услуги */}
                            <p className={styles.cardDescription}>{service.description}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServicesSection